import { Component, Input, OnInit } from '@angular/core';
import { MyTelegramService } from "../../../../services/my-telegram.service";
import { TelegramService } from '@arc.module/services/telegram.service';

export interface Bypass {
  upsCode: number,
  phase: number,
  freqHz: number,
  voltV: number,
  currA: number,
  powerW: number,
  dateTime: string
}



@Component({
  selector: 'app-bypass1',
  templateUrl: './bypass1.component.html',
  styleUrls: ['./bypass1.component.scss']
})
export class Bypass1Component implements OnInit {
  Bypass= [] as Bypass[];
  
  upsCode: number=-1;
  phase: number= -1;
  freqHz: number= -1;
  voltV: number= -1;
  currA: number= -1;
  powerW: number= -1;
  dateTime: string="";

  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {

    this.subscribe_bypass_Status()
    this.bypassStatus()
  }
  subscribe_bypass_Status() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1104) {
        


        this.upsCode=res.telData.bypasses[0].upsCode;
        this.phase= res.telData.bypasses[0].phase;
        this.freqHz= res.telData.bypasses[0].freqHz;
        this.voltV= res.telData.bypasses[0].voltV;
        this.currA= res.telData.bypasses[0].currA;
        this.powerW= res.telData.bypasses[0].powerW;
        this.dateTime=res.telData.bypasses[0].dateTime;
      }
    });
  }

  bypassStatus() {
    console.log("start tel 1104")
    this.TelService.getInputStatus().subscribe(res => {
      if (res.telData) {
        this.Bypass = res.telData.bypasses as Bypass[];

        this.upsCode=res.telData.bypasses[0].upsCode;
        this.phase= res.telData.bypasses[0].phase;
        this.freqHz= res.telData.bypasses[0].freqHz;
        this.voltV= res.telData.bypasses[0].voltV;
        this.currA= res.telData.bypasses[0].currA;
        this.powerW= res.telData.bypasses[0].powerW;
        this.dateTime=res.telData.bypasses[0].dateTime;
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
