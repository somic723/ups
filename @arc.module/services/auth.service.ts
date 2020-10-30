import { HubService } from './hub.service';
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { SettingsService } from './settings.service';
import { IUser } from '@arc.module/models/interfaces/user.interface';

@Injectable({
  providedIn: "root"
})
export class AuthService {




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


  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private settings: SettingsService,
    private hubService: HubService,
    private http: HttpClient
  ) { }


  async login(usr, pswrd) {
    let obj = {
      username: usr,
      password: pswrd
    }
    const url = this.settings.json.serverAddresses[0] + '/Api/auth';
    return this.http
      .post(url, obj)
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.setData(data);
        this.hubService.startConnection();
        this.loginStatus.next(true);
        return 'SUCCESS';
      })
      .catch(err => {
        return err.error.text;
      });
  }

  setData(data) {
    localStorage.setItem('TOKEN', data.token);
    localStorage.setItem('USER', JSON.stringify(data.user));
    this._token = data.token;
    this._user = data.user;
  }

  logOut() {

    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USER');
    this._token = "";
    this._user = null;
  }
}
