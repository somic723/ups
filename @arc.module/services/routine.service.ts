import { DeviceDetectorService } from 'ngx-device-detector';
import { ClientInfo } from './../models/interfaces/client-info.interface';
import { ArcTelegramService } from './arcTelegram.service';
import { SettingsService } from '@arc.module/services/settings.service';
import { Injectable } from '@angular/core';

import { Telegram } from '@arc.module/models/classes/telegram.class';



@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private _interval;

  constructor(private settings: SettingsService, private deviceService: DeviceDetectorService, private telService: ArcTelegramService) {
  }
  stop() {
    clearInterval(this._interval);
  }
  start() {
    let interval = Number.parseInt(localStorage.getItem('INTERVAL'));
    clearInterval(this._interval);
    console.log("R_STARTED", interval);
    if (interval < 1000)
      interval = 1000;

    this._interval = setInterval(() => {


      this.sendInfo();


    }, interval);
  }
  sendInfo() {

    const info: ClientInfo = { address: window.location.origin, details: `BROWSER:${this.deviceService.browser} ${this.deviceService.browser_version}. OS:${this.deviceService.os} ${this.deviceService.os_version}}` };
    //console.log(info);

    this.telService.send(new Telegram(1, info
    ))
  }

}
