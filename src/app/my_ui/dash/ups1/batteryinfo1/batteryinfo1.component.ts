import {ThemePalette} from '@angular/material/core';
import { Component, Input, OnInit } from '@angular/core';
import { MyTelegramService } from "../../../../services/my-telegram.service";
import { TelegramService } from '@arc.module/services/telegram.service';


export interface BatteryInfo {
  estimatedChargeRemain: number;
  estimatedMinutesRemain: number;
  secondsOnBattery: number;
  tempC: number;
  upsCode: number;
  voltV: number;
  currA: number;
  dateTime: string;
  status: string;
  }

@Component({
  selector: 'app-batteryinfo1',
  templateUrl: './batteryinfo1.component.html',
  styleUrls: ['./batteryinfo1.component.scss']
})


export class Batteryinfo1Component implements OnInit {

  batteryInfo= [] as BatteryInfo[];
  estimatedChargeRemain: number=-1;
  estimatedMinutesRemain: number=-1;
  secondsOnBattery: number=-1;
  tempC: number=-1;
  upsCode: number=-1;
  voltV: number=-1;
  currA: number=-1;
  dateTime: string="";
  status: string="";
  lineBads: number=-1;
 
  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {
  
  this.getBatteryInfoSub();
  this.getBatteryInfo();



  this.subscribegetInputStatus();
  this.getInputStatus();
  }


  getBatteryInfoSub() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1108) {
        


        this.upsCode=res.telData.batteries[0].upsCode;
        this.estimatedChargeRemain= res.telData.batteries[0].estimatedChargeRemain;
        this.estimatedMinutesRemain= res.telData.batteries[0].estimatedMinutesRemain;
        this.secondsOnBattery= res.telData.batteries[0].secondsOnBattery;
        this.tempC= res.telData.batteries[0].tempC;
        this.voltV= res.telData.batteries[0].voltV;
        this.currA=res.telData.batteries[0].currA;
        this.dateTime=res.telData.batteries[0].dateTime;
        this.status=res.telData.batteries[0].status;






      }
    });
  }

  getBatteryInfo() {
    console.log("start tel 1104")
    this.TelService.getBatteryInfo().subscribe(res => {
      if (res.telData) {
        this.upsCode=res.telData.batteries[0].upsCode;
        this.estimatedChargeRemain= res.telData.batteries[0].estimatedChargeRemain;
        this.estimatedMinutesRemain= res.telData.batteries[0].estimatedMinutesRemain;
        this.secondsOnBattery= res.telData.batteries[0].secondsOnBattery;
        this.tempC= res.telData.batteries[0].tempC;
        this.voltV= res.telData.batteries[0].voltV;
        this.currA=res.telData.batteries[0].currA;
        this.dateTime=res.telData.batteries[0].dateTime;
        this.status=res.telData.batteries[0].status;

      }
      else {
        // TODO: rectify
        console.log("not");
      }
    });
  }




  subscribegetInputStatus() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1102) {
        if (res.telData) {
  
  
        
          this.lineBads= res.telData.inputs[0].lineBads;
  
          // this.testdatacource = res.telData.tests as test[];
        }
        else {
          // TODO: rectify
          console.log("not");
        }

      }
    });
  }

 

  getInputStatus() {
    console.log("start tel 1102")
    this.TelService.getInputStatus().subscribe(res => {
      if (res.telData) {

        this.lineBads= res.telData.inputs[0].lineBads;

        // this.testdatacource = res.telData.tests as test[];
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
