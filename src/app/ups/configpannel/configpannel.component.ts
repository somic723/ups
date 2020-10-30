import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


export interface Input {
  phase: string;
  freq: string;
  volt: string;
  curr: string;
  truepower: string;
  voltmin: string;
  voltmax: string;
}

export interface Output {
  phase: string;
  volt: string;
  curr: string;
  power: string;
  load: string;
}



const INPUT_DATA: Input[] = [
  {phase: '1', freq: 'AC', volt: 'AC', curr: 'AC', truepower: 'AC', voltmin: 'AC', voltmax: 'AC'},
  {phase: '2', freq: '220', volt: 'AC', curr: 'AC', truepower: 'AC', voltmin: 'AC', voltmax: 'AC'},
  {phase: '3', freq: '220', volt: 'AC', curr: 'AC', truepower: 'AC', voltmin: 'AC', voltmax: 'AC'},
];

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

  dataSource = INPUT_DATA;
  dataSource1 = OUTPUT_DATA;


  constructor() {

  }

  ngOnInit(): void {
  }

}
