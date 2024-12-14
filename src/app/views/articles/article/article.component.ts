import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../../shared/services/article.service";
import {ArticleType} from "../../../../types/article.type";
import {environment} from "../../../../environments/environment";
import {CommentService} from "../../../shared/services/comment.service";
import {CommentParamsType} from "../../../../types/comment-params.type";
import {CommentsType} from "../../../../types/comments.type";
import {AuthService} from "../../../core/auth/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActionType} from "../../../../types/action.type";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  article!: ArticleType;
  relatedArticles: ArticleType[] = [];
  comments: CommentsType = {allCount: 0, comments: []};
  actions: ActionType[] = [];
  articleActions: ActionType[] = [];
  showMoreComments: boolean = false;
  offset: number = 3;
  serverStaticPath = environment.serverStaticPath;
  isLogged: boolean = false;

  commentText = this.fb.group({
    text: ['', [Validators.required]],
  });

  constructor(private activatedRoute: ActivatedRoute,
              private articleService: ArticleService,
              private commentService: CommentService,
              private authService: AuthService,
              private _snackBar: MatSnackBar,
              private fb: FormBuilder,
  ) {
    this.isLogged = this.authService.getIsLoggedIn();
  }

  ngOnInit() {

    this.getArticle();

    this.activatedRoute.params.subscribe(params => {
      this.articleService.getRelatedArticles(params['url'])
        .subscribe((data: ArticleType[]) => {
          this.relatedArticles = data;
        });
    });

    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    });
  }

  getArticle() {
    this.activatedRoute.params.subscribe(params => {
      this.articleService.getArticle(params['url'])
        .subscribe((data: ArticleType) => {
          this.comments.comments = [];
          this.offset = 3;

          if (data.commentsCount && data.commentsCount > 3) {
            this.showMoreComments = true;
          } else if (data.commentsCount === 0) {
            this.showMoreComments = false;
          }

          data.comments?.forEach(comment => {
            this.commentService.getCommentActions(comment.id)
              .subscribe({
                next: (data) => {
                  this.articleActions = data as ActionType[];

                  let foundAction = this.articleActions.find(action => {
                    return comment.id === action.comment;
                  });

                  if (foundAction) {
                    if (foundAction.action === 'like') {
                      comment.likeApplied = true;
                    } else if (foundAction.action === 'dislike') {
                      comment.dislikeApplied = true;
                    }
                  } else {
                    comment.likeApplied = false;
                    comment.dislikeApplied = false;
                  }
                },
                error: () => {
                  this._snackBar.open('Ошибка');
                }
              });
          });

          this.article = data;

          this.getCommentsActions();
        });
    });
  }

  getMoreComments(id: string) {
    if(this.comments.comments.length === 0) {
      const paramsObj: CommentParamsType = {
        offset: this.offset,
        article: id
      }
      this.commentService.getComments(paramsObj)
        .subscribe(data => {
          if (data.comments) {
            data.comments.forEach(comment => {
              let foundAction = this.actions.find(action => {
                return comment.id === action.comment;
              });

              if (foundAction) {
                if (foundAction.action === 'like') {
                  comment.likeApplied = true;
                } else if (foundAction.action === 'dislike') {
                  comment.dislikeApplied = true;
                }
              } else {
                comment.likeApplied = false;
                comment.dislikeApplied = false;
              }

              this.comments.comments.push(comment);
            });

            this.comments.allCount = data.allCount;

            if(data.comments.length === data.allCount) {
              this.showMoreComments = false;
            }
          }

          if (this.comments.comments.length + 3 === this.comments.allCount) {
            this.showMoreComments = false;
          }
        });

    } else if ((this.comments.comments.length + 3 < this.comments.allCount) && (this.comments.comments.length !== 0)) {
      this.showMoreComments = true;

      this.offset = this.offset + 10;

      const paramsObj: CommentParamsType = {
        offset: this.offset,
        article: id
      }

      this.commentService.getComments(paramsObj)
        .subscribe(data => {
          data.comments.forEach(comment => {
            let foundAction = this.actions.find(action => {
              return comment.id === action.comment;
            });

            if (foundAction) {
              if (foundAction.action === 'like') {
                comment.likeApplied = true;
              } else if (foundAction.action === 'dislike') {
                comment.dislikeApplied = true;
              }
            } else {
              comment.likeApplied = false;
              comment.dislikeApplied = false;
            }

            this.comments.comments.push(comment);
          });

          if (this.comments.comments.length + 3 === this.comments.allCount) {
            this.showMoreComments = false;
          }
        });

    } else if (this.comments.comments.length + 3 === this.comments.allCount) {
      this.showMoreComments = false;

    } else {
      this.showMoreComments = false;
    }
  }


  getCommentActions(id: string) {
    this.commentService.getCommentActions(id)
      .subscribe({
        next: (data) => {
          this.articleActions = data as ActionType[];
        },
          error: () => {
          this._snackBar.open('Ошибка');
        }
      });
  }


  getCommentsActions() {
    const paramsObj = {
      articleId: this.article.id
    }

    this.commentService.getArticleCommentsActions(paramsObj)
      .subscribe({
        next: (data) => {
          this.actions = data as ActionType[];
        },
        error: () => {
          this._snackBar.open('Ошибка');
        }
      });
  }

  addComment(id: string) {
    if (this.commentText.valid && this.commentText.value.text) {

      this.commentService.addComment(this.commentText.value.text, id)
        .subscribe({
          next: () => {
            this._snackBar.open('Ваш комментарий успешно добавлен');
            this.commentText.get('text')?.setValue('');
            this.getArticle();
          },
          error: () => {
            this._snackBar.open('Ошибка при добавлении комментария');
          }
        });

    }
  }


}
