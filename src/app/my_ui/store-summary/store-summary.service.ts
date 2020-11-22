import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreSummary } from './store-summary';

import { Component, OnInit } from '@angular/core';
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


@Injectable({
  providedIn: 'root'
})


export class StoreSummaryService {




 storeSummary=new Subject<StoreSummary[]>();
  

  constructor(public TelService: MyTelegramService,private telegramService:TelegramService) {
    this.batteryinfo()
  }

  batteryinfo() {
   return this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1108) {
        console.log('get 1108')  
        console.log(res.telData)        
     this.storeSummary.next(res.telData.batteries as StoreSummary[]);
      }
    });
  }


    
}



  

