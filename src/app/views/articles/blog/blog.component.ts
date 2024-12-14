import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../../types/article.type";
import {AppliedFilterType} from "../../../../types/applied-filter.type";
import {ActiveParamsType} from "../../../../types/active-params.type";
import {CategoryService} from "../../../shared/services/category.service";
import {CategoryType} from "../../../../types/category.type";
import {ActivatedRoute, Router} from "@angular/router";
import {debounceTime} from "rxjs";
import {ActiveParamsUtil} from "../../../shared/utils/active.params.util";
import {ArticleService} from "../../../shared/services/article.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  articles: ArticleType[] = [];
  categories: CategoryType[] = [];
  activeParams: ActiveParamsType = {categories: []};
  appliedFilters: AppliedFilterType[] = [];
  filtersOpen: boolean = false;
  pages: number[] = [];

  constructor(private categoryService: CategoryService,
              private articleService: ArticleService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {
    this.processBlog();
  }

  processBlog() {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.categories = data;

        this.activatedRoute.queryParams
          // .pipe(
          //   debounceTime(500)
          // )
          .subscribe(params => {
            this.activeParams = ActiveParamsUtil.processParams(params);

            this.appliedFilters = [];
            this.activeParams.categories.forEach(url => {
              const foundCategory = this.categories.find(category => category.url === url);
              if (foundCategory) {
                this.appliedFilters.push({
                  name: foundCategory.name,
                  urlParam: foundCategory.url
                });
              }
            });

            this.articleService.getArticles(this.activeParams)
              .subscribe(data => {
                this.pages = [];

                for (let i = 1; i <= data.pages; i++) {
                  this.pages.push(i);
                }

                this.articles = data.items;
              });
          });
      });
  }

  toggleFilters() {
    this.filtersOpen = !this.filtersOpen;
  }

  openPage(page: number) {
    this.activeParams.page = page;

    this.router.navigate(['/blog'], {
      queryParams: this.activeParams
    });
  }

  openPrevPage() {
    if (this.activeParams.page && this.activeParams.page > 1) {
      this.activeParams.page--;

      this.router.navigate(['/blog'], {
        queryParams: this.activeParams
      });
    }
  }

  openNextPage() {
    if (this.activeParams.page && this.activeParams.page < this.pages.length) {
      this.activeParams.page++;

      this.router.navigate(['/blog'], {
        queryParams: this.activeParams
      });
    }
  }

  removeAppliedFilter(appliedFilter: AppliedFilterType) {
    this.activeParams.categories = this.activeParams.categories.filter(item => item !== appliedFilter.urlParam);

    this.activeParams.page = 1;
    this.router.navigate(['/blog'], {
      queryParams: this.activeParams
    });
  }


}
