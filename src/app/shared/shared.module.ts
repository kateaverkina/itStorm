import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleCardComponent} from "./components/article-card/article-card.component";
import {RouterModule} from "@angular/router";
import { CommentComponent } from './components/comment/comment.component';
import {SortingItemComponent} from "./components/sorting-item/sorting-item.component";


@NgModule({
  declarations: [
    ArticleCardComponent,
    CommentComponent,
    SortingItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ArticleCardComponent,
    CommentComponent,
    SortingItemComponent
  ]
})
export class SharedModule { }
