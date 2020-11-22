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
  selector: 'app-bypass',
  templateUrl: './bypass.component.html',
  styleUrls: ['./bypass.component.css']
})
export class BypassComponent implements OnInit {


  Bypass= [] as Bypass[];

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['Freq(Hz)', 'Volt(V)', 'Curr(A)', 'Power(W)'];
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
    { data: [this.Bypass[0]?.freqHz,this.Bypass[0]?.voltV,this.Bypass[0]?.currA,this.Bypass[0]?.powerW], label: '192.168.1.1' },
    { data: [this.Bypass[1]?.freqHz,this.Bypass[1]?.voltV,this.Bypass[1]?.currA,this.Bypass[1]?.powerW], label: '192.168.1.2' }
  ];



  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {

    this.subscribe_bypass_Status()
    this.bypassStatus()
  }


  subscribe_bypass_Status() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1104) {
        
       // this.input = res.telData.inputs as Input[];
       this.setChartbypass(res.telData.inputs as Bypass[]);
      }
    });
  }



  setChartbypass(output:Bypass[])
  {
     this.barChartData = [
      { data: [this.Bypass[0]?.freqHz,this.Bypass[0]?.voltV,this.Bypass[0]?.currA,this.Bypass[0]?.powerW], label: '192.168.1.1' },
      { data: [this.Bypass[1]?.freqHz,this.Bypass[1]?.voltV,this.Bypass[1]?.currA,this.Bypass[1]?.powerW], label: '192.168.1.2' }
    ];
    
  }

  bypassStatus() {
    console.log("start tel 1103")
    this.TelService.getInputStatus().subscribe(res => {
      if (res.telData) {
        this.Bypass = res.telData.inputs as Bypass[];
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
