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
  getInputStatus() {
    return this.telegramService.send({
      telId: 1102, telData: {
      }

    });
  }
//#endregion


//#region output
getOutputStatus() {
  return this.telegramService.send({
    telId: 1103, telData: {
    }

  });
}
//#endregion




//#region output
bypassStatus() {
  return this.telegramService.send({
    telId: 1104, telData: {
    }

  });
}
//#endregion


//#region output
get_Alarm() {
  return this.telegramService.send({
    
    telId: 1116, telData: {
    }

  });
}
//#endregion




}
