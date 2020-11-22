import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { MyTelegramService } from "../../../services/my-telegram.service";

import { MatProgressButtonOptions } from 'mat-progress-buttons'

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Console } from 'console';
import { TelegramService } from '@arc.module/services/telegram.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';



export interface Input {
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
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.css']
})
export class StoreSessionsChartComponent implements OnInit {





  input= [] as Input[];


  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['Freq(Hz)', 'Volt(V)', 'Curr(A)', 'TruePower(W)', 'VoltMin(v)', 'VoltMax(v)'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Color[] = [
    {
      borderColor: 'rgb(199, 62, 29,0.5)',
      backgroundColor: 'rgb(246, 174, 45,1)',
    },
  ];

 

  public barChartData: ChartDataSets[] = [
    { data: [this.input[0]?.freqHz,this.input[0]?.currA,this.input[0]?.voltV,this.input[0]?.truePowerW,this.input[0]?.voltMinV,this.input[0]?.voltMaxV], label: '192.168.1.1' },
    { data: [this.input[1]?.freqHz,this.input[1]?.currA,this.input[1]?.voltV,this.input[1]?.truePowerW,this.input[1]?.voltMinV,this.input[1]?.voltMaxV], label: '192.168.1.2' }

  ];






  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {



    this.subscribegetInputStatus()
    this.getInputStatus()
  }



  subscribegetInputStatus() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1102) {
        console.log('subscribe')
        console.log(res.telData.inputs);
        
       // this.input = res.telData.inputs as Input[];
       this.setChartData(res.telData.inputs as Input[]);
        console.warn(this.input[0].upsCode)
      }
    });
  }

  setChartData(inputs:Input[])
  {
     this.barChartData = [
      { data: [inputs[0]?.freqHz,inputs[0]?.currA,inputs[0]?.voltV,inputs[0]?.truePowerW,inputs[0]?.voltMinV,inputs[0]?.voltMaxV], label: '192.168.1.1' },
      { data: [inputs[1]?.freqHz,inputs[1]?.currA,inputs[1]?.voltV,inputs[1]?.truePowerW,inputs[1]?.voltMinV,inputs[1]?.voltMaxV], label: '192.168.1.2' }
  
    ];
    
  }

  getInputStatus() {
    console.log("start tel 1102")
    this.TelService.getInputStatus().subscribe(res => {
      if (res.telData) {
        this.input = res.telData.inputs as Input[];
        // this.testdatacource = res.telData.tests as test[];
      }
      else {
        // TODO: rectify
        console.log("not");
      }
    });
  }
  ngOnInit() {
  }

}
