import { Component, Input, OnInit } from '@angular/core';
import { MyTelegramService } from "../../../../services/my-telegram.service";
import { TelegramService } from '@arc.module/services/telegram.service';


export interface Inputinfo {
  upsCode: number,
  phase: number,
  freqHz: number,
  voltV: number,
  currA: number,
  truePowerW: number,
  voltMinV: number,
  voltMaxV: number,
  lineBads: number,
  dateTime: string
}

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.scss']
})
export class Input1Component implements OnInit {

  Inputinfo: Input[];
  upsCode: number = -1;
  phase: number = -1;
  freqHz: number = -1;
  voltV: number = -1;
  currA: number = -1;
  truePowerW: number = -1;
  voltMinV: number = -1;
  voltMaxV: number = -1;
  lineBads: number = -1;
  dateTime: string = "";



  constructor(public TelService: MyTelegramService, private telegramService: TelegramService) {

    this.subscribegetInputStatus();
    this.getInputStatus();

  }


  subscribegetInputStatus() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1102) {
        if (res.telData) {
          this.Inputinfo = res.telData.inputs[0] as Input[];
  
  
          this.upsCode = res.telData.inputs[0].upsCode;
          this.phase= res.telData.inputs[0].phase;
          this.freqHz= res.telData.inputs[0].freqHz;
          this.voltV= res.telData.inputs[0].voltV;
          this. currA= res.telData.inputs[0].currA;
          this.truePowerW= res.telData.inputs[0].truePowerW;
          this.voltMinV= res.telData.inputs[0].voltMinV;
          this.voltMaxV= res.telData.inputs[0].voltMaxV;
          this.lineBads= res.telData.inputs[0].lineBads;
          this.dateTime= res.telData.inputs[0].dateTime;
  
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
        this.Inputinfo = res.telData.inputs[0] as Input[];


        this.upsCode = res.telData.inputs[0].upsCode;
        this.phase= res.telData.inputs[0].phase;
        this.freqHz= res.telData.inputs[0].freqHz;
        this.voltV= res.telData.inputs[0].voltV;
        this. currA= res.telData.inputs[0].currA;
        this.truePowerW= res.telData.inputs[0].truePowerW;
        this.voltMinV= res.telData.inputs[0].voltMinV;
        this.voltMaxV= res.telData.inputs[0].voltMaxV;
        this.lineBads= res.telData.inputs[0].lineBads;
        this.dateTime= res.telData.inputs[0].dateTime;

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
