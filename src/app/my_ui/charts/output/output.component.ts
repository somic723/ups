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
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  output= [] as Output[];


  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['Freq(Hz)','Volt(V)', 'Curr(A)', 'Power(W)', 'Load(%)'];
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
    { data: [this.output[0]?.freqHz,this.output[0]?.voltV,this.output[0]?.currA,this.output[0]?.powerW,this.output[0]?.load], label: '192.168.1.1' },
    { data: [this.output[1]?.freqHz,this.output[1]?.voltV,this.output[1]?.currA,this.output[1]?.powerW,this.output[1]?.load], label: '192.168.1.2' }

  ];



  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {

    this.subscribegetOutputStatus()
    this.getOutputStatus()
  }

  subscribegetOutputStatus() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1102) {
        console.log('subscribe')
        console.log(res.telData.inputs);
        
       // this.input = res.telData.inputs as Input[];
       this.setChartOutputData(res.telData.inputs as Output[]);
        console.warn(this.output[0].upsCode)
      }
    });
  }

  setChartOutputData(output:Output[])
  {
     this.barChartData = [
      { data: [this.output[0]?.freqHz,this.output[0]?.voltV,this.output[0]?.currA,this.output[0]?.powerW,this.output[0]?.load], label: '192.168.1.1' },
      { data: [this.output[1]?.freqHz,this.output[1]?.voltV,this.output[1]?.currA,this.output[1]?.powerW,this.output[1]?.load], label: '192.168.1.2' }
    ];
    
  }

  getOutputStatus() {
    console.log("start tel 1103")
    this.TelService.getInputStatus().subscribe(res => {
      if (res.telData) {
        this.output = res.telData.inputs as Output[];
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
