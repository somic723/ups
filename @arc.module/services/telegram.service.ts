import { Observable } from 'rxjs';
import { Telegram } from './../models/classes/telegram.class';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth.service';
// import { SettingsService } from '../../public-api';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: "root"
})
export class TelegramService {
  //latestEvent: Subject<TelegramObject> = new Subject<TelegramObject>();

  constructor(
    private http: HttpClient,
    private settings: SettingsService,
    private auth: AuthService

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
    headers = header.append('Authorization', 'Bearer ' + this.auth.token);

    return this.http
      .post<Telegram>(url, telegram.telData, { headers });

  }

}
