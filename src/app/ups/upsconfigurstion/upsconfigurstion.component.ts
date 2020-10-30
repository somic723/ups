import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-upsconfigurstion',
  templateUrl: './upsconfigurstion.component.html',
  styleUrls: ['./upsconfigurstion.component.scss']
})
export class UpsconfigurstionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
