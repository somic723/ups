import { Component, OnInit } from '@angular/core';
import {MatFabMenu, MatFabMenuDirection} from '@angular-material-extensions/fab-menu';
import { ThemePalette } from '@angular/material/core';
import { IdentificationComponent } from '../identification/identification.component';
import { UpstestComponent } from '../upstest/upstest.component';
import { UpscontrolComponent } from '../upscontrol/upscontrol.component';
import { UpsconfigurstionComponent } from '../upsconfigurstion/upsconfigurstion.component';
import { NetworkComponent } from '../network/network.component';
import {DatetimeComponent } from '../datetime/datetime.component';



import {MatDialog} from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  position: string;

}
export interface Bypass {
  phase: string;
  volt: string;
  curr: string;
  power: string;
}




const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Power Supply on', name: 'AC'},
  {position: 'Input Voltage', name: '220'},
  {position: 'Output Voltage', name: '220'},
  {position: 'Charging Percent', name: '100%'},

];
const BYPASS_DATA: Bypass[] = [
  {phase: '1', volt: 'AC', curr: 'AC', power: 'AC'},
  {phase: '2',  volt: 'AC', curr: 'AC', power: 'AC'},
  {phase: '3', volt: 'AC', curr: 'AC', power: 'AC'},
];



@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
})
export class AlarmsComponent implements OnInit {


// setting fab menu
title = 'fab-menu';

  direction: MatFabMenuDirection = 'left';

  color: ThemePalette = 'primary';
  exampleIndex = 1;
  exampleFabButtons: MatFabMenu[];
  layout = 'end end';

  fabButtonsRandom: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
    },
    {
      id: 2,
      icon: 'mail',
    },
    {
      id: 3,
      icon: 'file_copy',

    },
    {
      id: 4,
      icon: 'file_copy',

    },
    {
      id: 5,
      icon: 'file_copy',

    },
    {
      id: 6,
      icon: 'file_copy',

    },
 
  ];

// 




  displayedColumns: string[] = ['position'];
  displayedColumns1: string[] = ['phase','volt','curr','power'];

  dataSource = ELEMENT_DATA;
  dataSource1 = BYPASS_DATA;



  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(IdentificationComponent,{    
    width: '800px',
    height : '800px',});
  }
  selectedAction = (event) => {
    if (event === 1) {
      this.dialog.open(UpstestComponent,{    
        width: '800px',
        height : '800px',});
      
    }
    if (event === 2) {
      
      this.dialog.open(UpscontrolComponent,{    
        width: '750px',
        height : '750px',});
      
    
    }
    if (event === 3) {
      this.dialog.open(UpsconfigurstionComponent,{    
        width: '750px',
        height : '750px',});
    }
    if (event === 4) {
      this.dialog.open(NetworkComponent,{    
        width: '400px',
        height : '400px',});
    }
    if (event === 5) {
      this.dialog.open(DatetimeComponent,{    
        width: '800px',
        height : '800px',});
    }
    }
  ngOnInit(): void {
  }

}
