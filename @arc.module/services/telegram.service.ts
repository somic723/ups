import { TokenService } from './token.service';
import { HubService } from './hub.service';
import { asapScheduler, Observable, scheduled, throwError } from 'rxjs';
import { Telegram } from './../models/classes/telegram.class';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth.service';
// import { SettingsService } from '../../public-api';
import { SettingsService } from './settings.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class TelegramService {
  //latestEvent: Subject<TelegramObject> = new Subject<TelegramObject>();

  get backEndTelegram() {
    return this.hub.latestEvent;
  }

  constructor(
    private http: HttpClient,
    private settings: SettingsService,
    private tokenService: TokenService,
    private hub: HubService,
    private router: Router,

  ) {

  }

  send(
    telegram: Telegram
  ): Observable<Telegram> {

    const url = this.settings.serverAddress + `/Api/ui?telId=${telegram.telId}`;
    if (telegram.telData == "" || telegram.telData == null) {
      telegram.telData = {};
    }
    let headers = new HttpHeaders();
    let header = new HttpHeaders();
    headers = header.append('content-type', 'application/json');
    headers = header.append('Authorization', 'Bearer ' + this.tokenService.token);

    return this.http
      .post<Telegram>(url, telegram.telData, { headers }).pipe(
        catchError((err: any, caught: Observable<any>) => {
          return this.handleAuthError(err)
        }));
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401) {
      //navigate /delete cookies or whatever
      this.router.navigate([`/login`]);
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return scheduled('', asapScheduler); // or EMPTY may be appropriate here
    }
    return throwError(err);
  }
}
