import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {RequestService} from "../../services/request.service";
import {RequestType} from "../../../../types/request.type";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  requestForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  requestSent: boolean = false;

  @ViewChild('popup') popup!: TemplateRef<ElementRef>;
  dialogRef: MatDialogRef<any> | null = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private requestService: RequestService) {
  }

  openPopup() {
    this.requestSent = false;
    this.dialogRef = this.dialog.open(this.popup);
    this.dialogRef.backdropClick()
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  sendRequest() {
    if (this.requestForm.valid && this.requestForm.value.name && this.requestForm.value.phone) {
      const paramsObject: RequestType = {
        name: this.requestForm.value.name,
        phone: this.requestForm.value.phone,
        type: 'order',
        service: 'перезвонить',
      };

      this.requestService.request(paramsObject)
        .subscribe({
          next: () => {
            this._snackBar.open('Ваш запрос успешно отправлен');
            this.requestSent = true;
          },
          error: (errorResponse: HttpErrorResponse) => {
            if(errorResponse.error && errorResponse.error.message) {
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
