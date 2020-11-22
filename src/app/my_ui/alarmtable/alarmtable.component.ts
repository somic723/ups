import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { MyTelegramService } from "../../services/my-telegram.service";

import { MatProgressButtonOptions } from 'mat-progress-buttons'

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Console } from 'console';
import { TelegramService } from '@arc.module/services/telegram.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


export interface PeriodicElement {
  alarmName: string;
  alarmCode: number;
  alarmDescription: string;
  alarmTimeFromUps: string;
  datetime: string;
  upsCode: number;
  upsIpAddress: string;
}



@Component({
  selector: 'app-alarmtable',
  templateUrl: './alarmtable.component.html',
  styleUrls: ['./alarmtable.component.css']
})


export class AlarmtableComponent implements OnInit {


  ELEMENT_DATA= [] as PeriodicElement[];





  displayedColumns: string[] = ['alarmName', 'upsIpAddress','upsCode','datetime','alarmCode', 'alarmDescription', 'alarmTimeFromUps'];
  
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {

    this.subscribeAlarm()
    this.getAlarm()
  }

  
  getAlarm() {
    console.log("start tel 1116")
    this.TelService.get_Alarm().subscribe(res => {
      if (res.telData) {
        
        this.ELEMENT_DATA = res.telData.alarms as PeriodicElement[];
       this.dataSource.data=this.ELEMENT_DATA

      }
      else {
        console.log("not");
      }
    });
  }

  subscribeAlarm() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1116) {
        console.log('subscribe 1116')
        this.ELEMENT_DATA = res.telData.alarms as PeriodicElement[];

        
       // this.input = res.telData.inputs as Input[];
       this.dataSource.data=this.ELEMENT_DATA

      }
    });
  }







  ngOnInit(): void {
  }

}
