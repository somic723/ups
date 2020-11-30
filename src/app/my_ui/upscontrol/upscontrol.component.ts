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


export interface shutdownTypes {
  output: number;
  system: number

}


export interface autoRestartValues {
  on: number;
  off: number

}


export interface defulte {
  upsCode: number;
  shutdownType: number;
  shutdownAfterDelaySec: number;
  startupAfterDelaySec: number;
  rebootWithDurationSec: number;
  autoRestart: number;

}



@Component({
  selector: 'app-upscontrol',
  templateUrl: './upscontrol.component.html',
  styleUrls: ['./upscontrol.component.scss']
})
export class UpscontrolComponent implements OnInit {

  defulte: defulte = {} as any;

  upscontrol: FormGroup;
  readCtrldata: FormControl;
  disabled: boolean = true;

  constructor(fb: FormBuilder, public TelService: MyTelegramService,private telegramService:TelegramService) {
    this.upscontrol = fb.group({
      ShutdownType: [null],
      AutoRestart: [null],
      ShutdownAfterDelay: [null],
      Startup: [null],
      Reboot: [null],

    });
    this.defulte = {
      upsCode: -99,
      shutdownType: -99,
      shutdownAfterDelaySec: -99,
      startupAfterDelaySec: -99,
      rebootWithDurationSec: -99,
      autoRestart: -99
    };


    // this.subscribeOnTelegrams()
    this.getControl();
    this.getdefult();
  }


  ControlSubmit() {

    console.warn(this.upscontrol.value)

    // const upsCode=this.upscontrol.value;
    const shutdownAfterDelaySec=this.upscontrol.value.ShutdownAfterDelay;
    const startupAfterDelaySec=this.upscontrol.value.Startup;
    const rebootWithDurationSec=this.upscontrol.value.Reboot;
    let shutdownType=-1;
    let autoRestart=-1;

      if(this.upscontrol.value.AutoRestart=="on")
          autoRestart=1;
      else
          autoRestart=2;
      if(this.upscontrol.value.ShutdownType=="output")
          shutdownType=1;
      else
          shutdownType=2;
    
    
    const telData={
    "UpsCode":"2",
    "shutdownAfterDelaySec":shutdownAfterDelaySec,
    "startupAfterDelaySec":startupAfterDelaySec,
    "rebootWithDurationSec":rebootWithDurationSec,
    "autoRestart":autoRestart,
    "shutdownType":shutdownType

  }
  console.warn(telData)
   
  this.TelService.sendcontrol(telData).subscribe(res => {
      console.log("answer",res)
      if (res.telData) {
      }
      else {
        // TODO: rectify
        console.log("not");
      }
    });
  }

  shutdownTypes_datacource: shutdownTypes[];
  autoRestartValues_datacource: autoRestartValues[];
  shutdown:string[];
  autoRestart:string[];

  getControl() {

    this.TelService.getControl().subscribe(res => {
      console.log(res)

      if (res.telData) {
        this.shutdownTypes_datacource = res.telData.shutdownTypes as shutdownTypes[];
        this.autoRestartValues_datacource = res.telData.autoRestartValues as autoRestartValues[];

        this.shutdown=Object.keys(this.shutdownTypes_datacource)
        this.autoRestart=Object.keys(this.autoRestartValues_datacource)

      }
      else {
        // TODO: rectify
        console.log("not 1120");
      }
    });
  }


  getdefult() {

    this.TelService.getdefult().subscribe(res => {
      console.log(res)
      
      if (res.telData) {
          this.defulte = res.telData as defulte;
        // this.shutdown=Object.keys(this.shutdownTypes_datacource)
        // this.autoRestart=Object.keys(this.autoRestartValues_datacource)

      }
      else {
        // TODO: rectify
        console.log("not 1120");
      }
    });
  }


  edite(){
    this.readCtrldata = new FormControl({value: '', disabled: 0})
  }
  
  ngOnInit(): void {
    this.readCtrldata = new FormControl({value: '', disabled: this.disabled})

  }



}
