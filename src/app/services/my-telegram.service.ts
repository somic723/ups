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


//#region connect
  getlist(){
    return this.telegramService.send({
      telId: 1125, telData: {
      }
  
    });
  
  }
  addlist(value:any){
    console.log(value)
    return this.telegramService.send({
      telId: 1126, telData: 
        value
  
  
    });
  
  }


  deletitemfromlist(value:any){
    console.log(value)
    return this.telegramService.send({
      telId: 1127, telData:{"hostId":value}

  
    });
  
  }
//#endregion


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


//#region setting
savesetting(value:string) {
  return this.telegramService.send({
    
    telId: 1117, telData: {
      "result": value
    }

  });
}


//#endregion

//#region bypass
bypassStatus() {
  return this.telegramService.send({
    telId: 1104, telData: {
    }

  });
}
//#endregion


//#region alarm
get_Alarm() {
  return this.telegramService.send({
    
    telId: 1116, telData: {
    }

  });
}
//#endregion

//#region control
getControl() {
  return this.telegramService.send({
    
    telId: 1120, telData: {
    }

  });
}

sendcontrol(value: any) {
  console.log(value)
  return this.telegramService.send({
    telId: 1110, telData: 
      value
    

  });  
}

getdefult() {
  return this.telegramService.send({
    
    telId: 1121, telData: {
    }

  });
}

//#endregion

//#region batteryinfo
getBatteryInfo() {
  return this.telegramService.send({
    
    telId: 1108, telData: {
    }

  });
}
//#endregion

//#region config
getConfig() {
  return this.telegramService.send({
    
    telId: 1122, telData: {
    }

  });
}

configSubmit(value: any) {
  console.log(value)
  return this.telegramService.send({
    telId: 1109, telData: 
      value
    
  });  
}

}
//#endregion



