import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticleComponent} from "./article/article.component";
import {BlogComponent} from "./blog/blog.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ArticleComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    ArticlesRoutingModule,
  ]
})
export class ArticlesModule {
}
