import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {UserInfoType} from "../../../types/user-info.type";
import {DefaultResponseType} from "../../../types/default-response.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name: string = '';
  name$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  getUserInfo(): Observable<UserInfoType | DefaultResponseType> {
    return this.http.get<UserInfoType | DefaultResponseType>(environment.api + 'users')
      .pipe(
        tap(data => {
          this.name = ((data as { name: string }).name);
          this.name$.next(this.name);
        })
      );
  }
}
