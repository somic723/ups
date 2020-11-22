import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { from } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { MyTelegramService } from "../../../services/my-telegram.service";

import { MatProgressButtonOptions } from 'mat-progress-buttons'

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Console } from 'console';
import { TelegramService } from '@arc.module/services/telegram.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';



export interface Input {
  "upsCode": number,
  "phase": number,
  "freqHz": number,
  "voltV": number,
  "currA": number,
  "truePowerW": number,
  "voltMinV": number,
  "voltMaxV": number,
  "lineBads": number,
  "dateTime": string
}

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.css']
})
export class StoreSessionsChartComponent implements OnInit {



  input:Input[]


  
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
    { data: [259, 180, 281, 156,200,344], label: '192.168.1.1' },
    { data: [259, 180, 281, 156,222,444], label: '192.168.1.2' }

  ];

  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {
    this.subscribegetInputStatus()
  }

  subscribegetInputStatus() {
    this.telegramService.backEndTelegram.subscribe(res => {

      if (res.telId == 1102) {
        console.warn("asdfrsdf")
      }
    });
  }

  // getInputStatus() {
  //   console.log("start")
  //   this.TelService.gettest().subscribe(res => {
  //     console.log(res)
  //     if (res.telData.tests) {
  //       this.testdatacource = res.telData.tests as test[];
  //     }
  //     else {
  //       // TODO: rectify
  //       console.log("not");
  //     }
  //   });
  // }


  ngOnInit() {
  }

}
