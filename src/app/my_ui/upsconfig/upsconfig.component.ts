import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { MyTelegramService } from "../../services/my-telegram.service";

import { MatProgressButtonOptions } from 'mat-progress-buttons'

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Console } from 'console';
import { TelegramService } from '../../../../@arc.module/services/telegram.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export interface Config {
  upsCode: number,
  batteryCapacity: string,
  audibleStatus: number,
  highVoltageTransferPointV: number,
  inputFreqHz: number,
  inputVoltageV: number,
  lowBattTime: number,
  lowVoltageTransferPointV: number,
  outputFreqHz: number,
  outputPower: number,
  outputVa: number,
  outputVoltageV: number

}


@Component({
  selector: 'app-upsconfig',
  templateUrl: './upsconfig.component.html',
  styleUrls: ['./upsconfig.component.scss']
})

export class UpsconfigComponent implements OnInit {


   config: Config = {} as any;

  upsconfig: FormGroup;
  readConf: FormControl;
  disabled: boolean = true;

  constructor(fb: FormBuilder, public TelService: MyTelegramService,private telegramService:TelegramService) {
    //#region ups test
    this.upsconfig = fb.group({
      InputPutVolt: [null],
      InputPutFreq: [null],
      OutPutVolt: [null],
      OutPutFreq: [null],
      LowBatt: [null],
      LowVolt: [null],
      HighVolt: [null],
      BattCapacity: [null],
      OutPutVA: [null],
      OutPutPower: [null],


    });
    this.config = {
      upsCode: -1,
      batteryCapacity: 'string',
      audibleStatus: -2,
      highVoltageTransferPointV: -2,
      inputFreqHz:-2 ,
      inputVoltageV: -2,
      lowBattTime: -2,
      lowVoltageTransferPointV: -2,
      outputFreqHz: -2,
      outputPower: -2,
      outputVa: -2,
      outputVoltageV:-2
    };

    setTimeout(() => {
      this.getConfig() 

    }, 5000);


    //#endregion
    // this.subscribeOnTelegrams()
  }

  configSubmit() {

    console.warn(this.upsconfig.value)

    const upsCode="2";
    const BatteryCapacity=this.upsconfig.value.batteryCapacity;
    const HighVoltageTransferPointV=this.upsconfig.value.highVoltageTransferPointV;
    const InputFreqHz=this.upsconfig.value.inputFreqHz;
    const inputVoltageV=this.upsconfig.value.InputVoltageV;
    const lowBattTime=this.upsconfig.value.LowBattTime;
    const lowVoltageTransferPointV=this.upsconfig.value.LowVoltageTransferPointV;

    const outputFreqHz=this.upsconfig.value.OutputFreqHz;
    const outputPower=this.upsconfig.value.OutputPower;

    const outputVa=this.upsconfig.value.OutputVa;
    const outputVoltageV=this.upsconfig.value.OutputVoltageV;


    let audibleStatus=2;

    
    
    const telData={
    "upsCode":"2",
    "BatteryCapacity":BatteryCapacity,
    "HighVoltageTransferPointV":HighVoltageTransferPointV,
    "InputFreqHz":InputFreqHz,
    "inputVoltageV":inputVoltageV,
    "lowBattTime":lowBattTime,
    "lowVoltageTransferPointV":lowVoltageTransferPointV,
    "outputFreqHz":outputFreqHz,
    "outputPower":outputPower,
    "outputVa":outputVa,
    "outputVoltageV":outputVoltageV,
    "audibleStatus":audibleStatus,

  }
   
    this.TelService.configSubmit(telData).subscribe(res => {
      console.log("answer",res)
      if (res.telData) {
      }
      else {
        // TODO: rectify
        console.log("not");
      }
    });
  }


  getConfig() {

    console.log("start 1122")
    this.TelService.getConfig().subscribe(res => {
      console.warn(res.telData)

      if (res.telData) {
        
        this.config = res.telData as Config;

      }
      else {
        // TODO: rectify
        console.log("not 1120");
      }
    });
  }


  ngOnInit(): void {
    this.readConf = new FormControl({value: '', disabled: this.disabled})

  }


  edite(){
    this.readConf = new FormControl({value: '', disabled: 0})
  }

}





// batteryCapacity: null
// highVoltageTransferPointV: 0
// inputFreqHz: 0
// inputVoltageV: 0
// lowBattTime: 0
// lowVoltageTransferPointV: 0
// outputFreqHz: 0
// outputPower: 0
// outputVa: 0
// outputVoltageV: 0
// upsCode: 2