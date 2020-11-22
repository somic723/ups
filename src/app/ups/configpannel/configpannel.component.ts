import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MyTelegramService } from "src/app/services/my-telegram.service";
import { DatetimeComponent } from '../datetime/datetime.component';


export interface Input {
  currA: number;
  freqHz: number;
  idinputStatusGroup: number;
  idupsinfo: number;
  idupsinfoNavigation: number;
  lineBads: number;
  phase: number;
  truePowerW: number;
  voltMaxV: number;
  voltMinV: number;
  voltV: number;
  dateTime: string;

}

export interface Output {
  phase: string;
  volt: string;
  curr: string;
  power: string;
  load: string;
}



// const INPUT_DATA: Input[] = [
//   {phase: '1', freq: 'AC', volt: 'AC', curr: 'AC', truepower: 'AC', voltmin: 'AC', voltmax: 'AC'},
//   {phase: '2', freq: '220', volt: 'AC', curr: 'AC', truepower: 'AC', voltmin: 'AC', voltmax: 'AC'},
//   {phase: '3', freq: '220', volt: 'AC', curr: 'AC', truepower: 'AC', voltmin: 'AC', voltmax: 'AC'},
// ];

const OUTPUT_DATA: Output[] = [
  {phase: '1', volt: 'AC', curr: 'AC', power: 'AC', load: 'AC'},
  {phase: '2',  volt: 'AC', curr: 'AC', power: 'AC', load: 'AC'},
  {phase: '3', volt: 'AC', curr: 'AC', power: 'AC', load: 'AC'},
];

@Component({
  selector: 'app-configpannel',
  templateUrl: './configpannel.component.html',
  styleUrls: ['./configpannel.component.scss']
})


export class ConfigpannelComponent implements OnInit {

  displayedColumns: string[] = ['phase','freq','volt','curr','truepower','voltmin','voltmax'];
  displayedColumns1: string[] = ['phase','volt','curr','power','load'];

  dataSource : Input[];
  dataSource1 : Input[];


  constructor(public TelService: MyTelegramService) {
    this.getInputStatus(1);

  }
  getInputStatus(data: number) {

    console.log("start")

    this.TelService.getInputStatus(data).subscribe(res => {
      console.log(res)
      console.log(res.telData.upsInputStatusList[0])
      if (res.telData.upsInputStatusList[0].idupsinfo==1)
       {
        this.dataSource = res.telData.upsInputStatusList[0] as Input[];
      } 
      else if(res.telData.upsInputStatusList[0].idupsinfo==2) 
      {
        this.dataSource1 = res.telData.upsInputStatusList[0] as Input[];
      }
      else{
        // TODO: rectify
        console.log("not");
      }
      

    });
  }

  ngOnInit(): void {
  }

}
