import {Component, Input, OnInit} from '@angular/core';
import {CommentType} from "../../../../types/comment.type";
import {CommentService} from "../../services/comment.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {
  likeApplied: boolean = false;
  dislikeApplied: boolean = false;
  violateApplied: boolean = false;

  @Input() comment!: CommentType;
  constructor(private commentService: CommentService,
              private _snackBar: MatSnackBar,) {
  }

  ngOnInit() {
    if (this.comment.likeApplied === true) {
      this.likeApplied = true;
    }
    if (this.comment.dislikeApplied === true) {
      this.dislikeApplied = true;
    }
  }

  applyAction(id: string, action: string) {
    if (action === 'like') {
      if (this.comment.likeApplied === true && this.comment.likesCount > 0) {
        this.commentService.applyAction(id, action)
          .subscribe({
            next: () => {
              this.likeApplied = false;
              this.comment.likeApplied = false;
              this.comment.likesCount--;
            },
            error: () => {
              this._snackBar.open('Ошибка');
            }
          })
      } else if (this.comment.dislikeApplied === true && this.comment.dislikesCount > 0) {
        this.commentService.applyAction(id, action)
          .subscribe({
            next: () => {
              this.dislikeApplied = false;
              this.likeApplied = true;
              this.comment.likeApplied = true;
              this.comment.dislikeApplied = false;
              this.comment.likesCount++;
              this.comment.dislikesCount--;
            },
            error: () => {
              this._snackBar.open('Ошибка');
            }
          })

      } else {
        this.commentService.applyAction(id, action)
          .subscribe({
            next: () => {
              this.likeApplied = true;
              this.comment.likeApplied = true;
              this.comment.likesCount++;
            },
            error: () => {
              this._snackBar.open('Ошибка');
            }
          })
      }
    }

    if (action === 'dislike') {
      if (this.comment.dislikeApplied === true && this.comment.dislikesCount > 0) {
        this.commentService.applyAction(id, action)
          .subscribe({
            next: () => {
              this.dislikeApplied = false;
              this.comment.dislikeApplied = false;
              this.comment.dislikesCount--;
            },
            error: () => {
              this._snackBar.open('Ошибка');
            }
          })
      } else if (this.comment.likeApplied === true && this.comment.likesCount > 0) {
        this.commentService.applyAction(id, action)
          .subscribe({
            next: () => {
              this.likeApplied = false;
              this.dislikeApplied = true;
              this.comment.dislikeApplied = true;
              this.comment.likeApplied = false;
              this.comment.likesCount--;
              this.comment.dislikesCount++;
            },
            error: () => {
              this._snackBar.open('Ошибка');
            }
          })

      } else {
        this.commentService.applyAction(id, action)
          .subscribe({
            next: () => {
              this.dislikeApplied = true;
              this.comment.dislikeApplied = true;
              this.comment.dislikesCount++;
            },
            error: () => {
              this._snackBar.open('Ошибка');
            }
          })
      }
    }

    if (action === 'violate') {
      this.violateApplied = true;
      this.commentService.applyAction(id, action)
        .subscribe({
          next: () => {
            this._snackBar.open('Жалоба отправлена');
          },
          error: () => {
            this._snackBar.open('Жалоба уже отправлена');
          }
        })
    }
  }
}
