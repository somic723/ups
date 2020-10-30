import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-upscontrol',
  templateUrl: './upscontrol.component.html',
  styleUrls: ['./upscontrol.component.scss']
})
export class UpscontrolComponent implements OnInit {

  constructor() { }
  onSubmit(f:NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  ngOnInit(): void {
  }

}
