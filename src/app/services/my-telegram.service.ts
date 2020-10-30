import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TelegramService } from "../../../@arc.module/services/telegram.service";

@Injectable({
  providedIn: 'root'
})

export class MyTelegramService {

  constructor(
    private telegramService: TelegramService,
    private http: HttpClient
  ) { }


  getBatteryInfo(data: number) {
    console.log("start service")
    return this.telegramService.send({
      telId: 1103, telData: {
        "upscode": 2
      }

    });




  }


}
