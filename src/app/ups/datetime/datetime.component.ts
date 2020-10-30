import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
 
 
  constructor(fb: FormBuilder) {  this.options = fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
 }

  
  NTPSubmit(N:NgForm) {
    console.log(N.value);  // { first: '', last: '' }
    console.log(N.valid);  // false
  }

  TIMEZONESubmit(TZ:NgForm) {
    console.log(TZ.value);  // { first: '', last: '' }
    console.log(TZ.valid);  // false
  }

  TIMESubmit(T:NgForm) {
    console.log(T.value);  // { first: '', last: '' }
    console.log(T.valid);  // false
  }


  ngOnInit(): void {
  }

}
