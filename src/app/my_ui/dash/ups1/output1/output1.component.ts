import { Component, Input, OnInit } from '@angular/core';
import { MyTelegramService } from "../../../../services/my-telegram.service";
import { TelegramService } from '@arc.module/services/telegram.service';



export interface Output {
  upsCode: number,
  phase: number,
  freqHz: number,
  voltV: number,
  currA: number,
  powerW: number,
  load:number,
  dateTime: string
}

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.scss']
})
export class Output1Component implements OnInit {
  Outputinfo: Output[];

  upsCode: number=-1;
  phase: number= -1;
  freqHz: number= -1;
  voltV: number= -1;
  currA: number= -1;
  powerW: number= -1;
  load:number= -1;
  dateTime: string="";

  constructor(public TelService: MyTelegramService, private telegramService: TelegramService) {
    
    this.subscribegetOutputStatus()
    this.getOutputStatus()
  }


  subscribegetOutputStatus() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1103) {
        if (res.telData) {
          this.Outputinfo = res.telData.outputs as Output[];
          console.log( res.telData)

          this.upsCode=res.telData.outputs[0].upsCode;
          this.phase= res.telData.outputs[0].phase;
          this.freqHz= res.telData.outputs[0].freqHz;
          this.voltV= res.telData.outputs[0].voltV;
          this.currA= res.telData.outputs[0].currA;
          this.powerW= res.telData.outputs[0].powerW;
          this.load=res.telData.outputs[0].load;
          this.dateTime=res.telData.outputs[0].dateTime;
  
              
        }
        else {
          // TODO: rectify
          console.log("not");
        }
      }
    });
  }


  getOutputStatus() {
    console.log("start tel 1103")
    this.TelService.getOutputStatus().subscribe(res => {
      if (res.telData) {
        this.Outputinfo = res.telData.outputs as Output[];
console.log( res.telData)
this.upsCode=res.telData.outputs[0].upsCode;
this.phase= res.telData.outputs[0].phase;
this.freqHz= res.telData.outputs[0].freqHz;
this.voltV= res.telData.outputs[0].voltV;
this.currA= res.telData.outputs[0].currA;
this.powerW= res.telData.outputs[0].powerW;
this.load=res.telData.outputs[0].load;
this.dateTime=res.telData.outputs[0].dateTime;
            
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
