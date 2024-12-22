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

  @Input() comment!: CommentType;
  constructor(private commentService: CommentService,
              private _snackBar: MatSnackBar,) {
  }

  ngOnInit() {

  }

  applyAction(id: string, action: string) {
    if (action === 'like') {
      if (this.comment.likeApplied === true && this.comment.likesCount > 0) {
        this.commentService.applyAction(id, action)
          .subscribe({
            next: () => {
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
