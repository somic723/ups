import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: string;

}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Manufacturer', name: 'AC'},
  {position: 'Model', name: '220'},
  {position: 'Serial Number', name: '220'},
  {position: 'Software Version', name: '100%'},
  {position: 'ComProt Version', name: '180 min'},
  {position: 'UPS Attached Device', name: '180 min'},

];



@Component({
  selector: 'app-upstest',
  templateUrl: './upstest.component.html',
  styleUrls: ['./upstest.component.scss']
})
export class UpstestComponent implements OnInit {


  displayedColumns: string[] = ['position','name'];
  
  dataSource = ELEMENT_DATA;

  constructor() { }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  ngOnInit(): void {
  }

}
