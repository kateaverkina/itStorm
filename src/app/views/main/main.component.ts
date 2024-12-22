import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ArticleService} from "../../shared/services/article.service";
import {ArticleType} from "../../../types/article.type";
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RequestService} from "../../shared/services/request.service";
import {RequestType} from "../../../types/request.type";
import {HttpErrorResponse} from "@angular/common/http";
import {RequestServiceType} from "../../../types/requestService.type";


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
    articles: ArticleType[] = [];

    requestForm = this.fb.group({
        name: ['', [Validators.required, Validators.pattern(/[А-ЯЁ]+(\s+[А-ЯЁ]+)?/)]],
        phone: ['', [Validators.required]],
        service: ['', [Validators.required]]
    });

    requestSent: boolean = false;
    serviceValue: string | null = '';

    @ViewChild('popup') popup!: TemplateRef<ElementRef>;
    dialogRef: MatDialogRef<any> | null = null;

    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        margin: 700,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: true,
        smartSpeed: 250,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        },
        nav: false
    }

    customOptionsReviews: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        margin: 25,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
        },
        nav: false
    };

    reviews = [
        {
            name: 'Станислав',
            image: 'reviews1.png',
            text: 'Спасибо огромное АйтиШторму за прекрасный блог с полезными статьями! Именно они и побудили меня углубиться в тему SMM и начать свою карьеру.'
        },
        {
            name: 'Алёна',
            image: 'reviews2.png',
            text: 'Обратилась в АйтиШторм за помощью копирайтера. Ни разу ещё не пожалела! Ребята действительно вкладывают душу в то, что делают, и каждый текст, который я получаю, с нетерпением хочется выложить в сеть.'
        },
        {
            name: 'Мария',
            image: 'reviews3.png',
            text: 'Команда АйтиШторма за такой короткий промежуток времени сделала невозможное: от простой фирмы по услуге продвижения выросла в мощный блог о важности личного бренда. Класс!'
        },
    ];

    services = [
        {
            service: 'Создание сайтов',
            text: 'В краткие сроки мы создадим качественный и самое главное продающий сайт\n' +
                '              для продвижения Вашего бизнеса!',
            price: '7 500',
            image: 'services1.png'
        },
        {
            service: 'Продвижение',
            text: 'Вам нужен качественный SMM-специалист или грамотный таргетолог? Мы готовы оказать Вам услугу “Продвижения” на наивысшем уровне!',
            price: '3 500',
            image: 'services2.png'
        },
        {
            service: 'Реклама',
            text: 'Без рекламы не может обойтись ни один бизнес или специалист. Обращаясь к\n' +
                '              нам, мы гарантируем быстрый прирост клиентов за счёт правильно настроенной рекламы.',
            price: '1 000',
            image: 'services3.png'
        },
        {
            service: 'Копирайтинг',
            text: 'Наши копирайтеры готовы написать Вам любые продающие текста, которые не\n' +
                '              только обеспечат рост охватов, но и помогут выйти на новый уровень в продажах.',
            price: '750',
            image: 'services4.png'
        },
    ];

    requestServices: RequestServiceType[] = [];
    constructor(private articleService: ArticleService,
                private fb: FormBuilder,
                private router: Router,
                private dialog: MatDialog,
                private _snackBar: MatSnackBar,
                private requestService: RequestService) {
    }

    ngOnInit() {
        this.articleService.getPopularArticles()
            .subscribe((data: ArticleType[]) => {
                this.articles = data;
            });
    }

    openPopup(value: string) {
        this.requestSent = false;
        this.serviceValue = value;
        this.requestForm.get('service')?.setValue(value);

        this.requestServices = this.services.filter(service => {
            return service.service !== value;
        });


        this.dialogRef = this.dialog.open(this.popup);
        this.dialogRef.backdropClick()
            .subscribe(() => {
                this.router.navigate(['/']);
            });
    }

    sendRequest() {
        if (this.requestForm.valid && this.requestForm.value.name && this.requestForm.value.phone && this.requestForm.value.service) {
            const paramsObject: RequestType = {
                name: this.requestForm.value.name,
                phone: this.requestForm.value.phone,
                type: 'order',
                service: this.requestForm.value.service,
            };

            this.requestService.request(paramsObject)
                .subscribe({
                    next: () => {
                        this._snackBar.open('Ваш запрос успешно отправлен');
                        this.requestSent = true;
                    },
                    error: (errorResponse: HttpErrorResponse) => {
                        if (errorResponse.error && errorResponse.error.message) {
                            this._snackBar.open(errorResponse.error.message);
                        } else {
                            this._snackBar.open('произошла ошибка при отправке формы, попробуйте еще раз.');
                        }
                    }
                });
        } else {
            this.requestForm.markAsTouched();
            this._snackBar.open('Заполните необходимые поля');
        }
    }

    closePopup() {
        this.dialogRef?.close();
        this.router.navigate(['/']);
    }


}
