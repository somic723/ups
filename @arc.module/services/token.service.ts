import { RoutineService } from './routine.service';
import { HubService } from './hub.service';
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { SettingsService } from './settings.service';
import { IUser } from '@arc.module/models/interfaces/user.interface';

@Injectable({
  providedIn: "root"
})
export class TokenService {

  private _user: IUser;
  get user(): IUser {
    if (!this._user) {
      this._user = JSON.parse(localStorage.getItem('USER'));
    }
    return this._user;
  }

  private _token: string;
  get token(): string {
    if (!this._token) {
      this._token = localStorage.getItem('TOKEN');
    }
    return this._token;
  }

  constructor(

  ) { }




  setData(data) {
    localStorage.setItem('TOKEN', data.token);
    localStorage.setItem('USER', JSON.stringify(data.user));
    localStorage.setItem('INTERVAL', JSON.stringify(data.routineInterval));
    this._token = data.token;
    this._user = data.user;
  }

  clearData() {

    localStorage.clear();
    this._token = null;
    this._user = null;

  }

}
