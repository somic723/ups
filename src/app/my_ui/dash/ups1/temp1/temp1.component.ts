import {ThemePalette} from '@angular/material/core';
import { Component, Input, OnInit } from '@angular/core';
import { MyTelegramService } from "../../../../services/my-telegram.service";
import { TelegramService } from '@arc.module/services/telegram.service';

@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.scss']
})
export class Temp1Component implements OnInit {
  tempC: number=-1;

  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {
  
    this.getBatteryInfoSub();
    this.getBatteryInfo();



  }


  getBatteryInfoSub() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1108) {
        


        this.tempC= res.telData.batteries[0].tempC;






      }
    });
  }

  getBatteryInfo() {
    console.log("start tel 1104")
    this.TelService.getBatteryInfo().subscribe(res => {
      if (res.telData) {

        this.tempC= res.telData.batteries[0].tempC;


      }
      else {
        // TODO: rectify
        console.log("not");
      }
    });
  }




  ngOnInit(): void {
  }

}
