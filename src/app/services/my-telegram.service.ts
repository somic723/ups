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

//#region testups
  gettest() {
    console.log("start service 1111")
    return this.telegramService.send({
      telId: 1111, telData: {
      }

    });

  }

  sendtest(value: any) {
    console.log("start service 1112")
    console.log(value)
    return this.telegramService.send({
      telId: 1112, telData: 
        value
      

    });  }
//#endregion



//#region input
  getInputStatus(data: number) {
    console.log("start service")
    return this.telegramService.send({
      telId: 1102, telData: {
        "upscode": 1
      }

    });
  }
//#endregion


}
