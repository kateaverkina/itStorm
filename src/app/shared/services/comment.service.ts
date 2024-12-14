import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../../environments/environment";
import {CommentsType} from "../../../types/comments.type";
import {ActiveParamsType} from "../../../types/active-params.type";
import {ArticleType} from "../../../types/article.type";
import {CommentParamsType} from "../../../types/comment-params.type";
import {DefaultResponseType} from "../../../types/default-response.type";
import {ActionType} from "../../../types/action.type";
import {ActionParamsType} from "../../../types/action-params.type";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  getComments(params: CommentParamsType): Observable<CommentsType> {
    return this.http.get<CommentsType>(environment.api + 'comments', {
      params: params
    });
  }


  addComment(text: string, article: string): Observable<DefaultResponseType> {
    return this.http.post<DefaultResponseType>(environment.api + 'comments', {
      text, article
    });
  }

  applyAction(id: string, action: string): Observable<DefaultResponseType> {
    return this.http.post<DefaultResponseType>(environment.api + 'comments/' + id + '/apply-action', {
      action
    });
  }

  getCommentActions(id: string): Observable<ActionType[] | DefaultResponseType> {
    return this.http.get<ActionType[] | DefaultResponseType>(environment.api + 'comments/' + id + '/actions');
  }

  getArticleCommentsActions(params: ActionParamsType): Observable<ActionType[] | DefaultResponseType> {
    return this.http.get<ActionType[] | DefaultResponseType>(environment.api + 'comments/article-comment-actions', {
      params: params
    });
  }
}
