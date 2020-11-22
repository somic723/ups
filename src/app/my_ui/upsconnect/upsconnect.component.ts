import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgForm, Validators} from '@angular/forms';
import { MyTelegramService } from "src/app/services/my-telegram.service";


import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';



export interface Element {
  system: string;
  condition: string;
  value: string;
  status: string;
}

const ELEMENT_NEW_DATA: Element[] = [
  {system: 'H2 server', condition: 'Hydrogen', value: '1.0079', status: 'H'},
  {system: 'HNX server', condition: 'Helium', value: '4.0026', status: 'He'},
  {system: 'H2 server', condition: 'Lithium', value: '6.941', status: 'Li'},
];



@Component({
  selector: 'app-upsconnect',
  templateUrl: './upsconnect.component.html',
  styleUrls: ['./upsconnect.component.scss']
})
export class UpsconnectComponent implements OnInit {
  upstest: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder,public TelService: MyTelegramService) {


  }

  value1 = '';
  addColumns = ['system', 'condition', 'value','status'];
  add_dataSource = new MatTableDataSource(ELEMENT_NEW_DATA);
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.add_dataSource.filter = filterValue;
  }
  
  addElement() {
    ELEMENT_NEW_DATA.push({system: this.value1, condition: '1.0079',value:'10', status: 'H'})
    this.add_dataSource = new MatTableDataSource(ELEMENT_NEW_DATA);
  }




  ngOnInit(): void {
  }

}
