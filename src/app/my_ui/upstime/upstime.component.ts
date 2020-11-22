import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgForm, Validators} from '@angular/forms';
import { MyTelegramService } from "src/app/services/my-telegram.service";


import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-upstime',
  templateUrl: './upstime.component.html',
  styleUrls: ['./upstime.component.scss']
})
export class UpstimeComponent implements OnInit {

  constructor(fb: FormBuilder,public TelService: MyTelegramService) { }


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
