import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgForm, Validators} from '@angular/forms';
import { MyTelegramService } from "src/app/services/my-telegram.service";


import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-upsconfig',
  templateUrl: './upsconfig.component.html',
  styleUrls: ['./upsconfig.component.scss']
})
export class UpsconfigComponent implements OnInit {

  constructor(fb: FormBuilder,public TelService: MyTelegramService) {


  }


  onSubmit(f:NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  

  ngOnInit(): void {
  }

}
