import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { MyTelegramService } from "../../services/my-telegram.service";

import { MatProgressButtonOptions } from 'mat-progress-buttons'

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Console } from 'console';
import { TelegramService } from '../../../../@arc.module/services/telegram.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


//#region ups test interface
export interface test {
  testDescription: string;
  testCode: string;
  enable: string

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'donePass(1)', weight: 1.0079, symbol: 'The test has been completed succesfully' },
  { position: 2, name: 'doneWarning(2)', weight: 4.0026, symbol: 'The test has been executed but a warning has been returned.Depending on the type of UPS monitored,detailed information of this warning is given by TestResultsDetail' },
  { position: 3, name: 'doneError(3)', weight: 6.941, symbol: 'The test has been executed but a warning has been returned. Depending on the type of UPS monitored, detailed information of this error given by TestresultsDetail' },
  { position: 4, name: 'abroted(4)', weight: 9.0122, symbol: 'The test has been aborted by the user' },
  { position: 4, name: 'inProgress(5)', weight: 9.0122, symbol: 'A test is currently running' },
  { position: 4, name: 'noTestInitiated(6)', weight: 9.0122, symbol: 'No previous test results are available' },


];



//#endregion


@Component({
  selector: 'app-upstesttab',
  templateUrl: './upstesttab.component.html',
  styleUrls: ['./upstesttab.component.scss']
})
export class UpstesttabComponent implements OnInit {

//#region spinner
spinnerButtonOptions: MatProgressButtonOptions = {
  active: false,
  text: 'Run Test',
  spinnerSize: 18,
  raised: true,
  stroked: false,
  buttonColor: 'primary',
  spinnerColor: 'accent',
  fullWidth: false,
  disabled: false,
  mode: 'indeterminate',
  
}
//#endregion




  upstest: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  // get testInit(){
  //   this.upstest.get()
  // }

  constructor(fb: FormBuilder, public TelService: MyTelegramService,private telegramService:TelegramService) {
    //#region ups test
    this.upstest = fb.group({
      UpsCode: [null],
      TestDescription: [null],
    });
    //#endregion
    this.subscribeOnTelegrams()
    this.gettest()
  }


  //#region ups test

  testResult:string=''
  testcode:string=''
  testDateTime:string=''
  testElapsedTime:string=''
  error:string=''







  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = ELEMENT_DATA;

  testdatacource: test[];
  testSubmit() {

  
    const TestCode=this.upstest.value.TestDescription.testCode;
    const TestDescription= this.upstest.value.TestDescription.testDescription;
    const UpsCode= this.upstest.value.UpsCode;

    const telData={"UpsCode":UpsCode,"TestCode":TestCode,"TestDescription":TestDescription}
   
    this.TelService.sendtest(telData).subscribe(res => {
      console.log("answer",res)
      if (res.telData) {
        this.spinnerButtonOptions.active = true;
      }
      else {
        this.spinnerButtonOptions.active = false;
        // TODO: rectify
        console.log("not");
      }
    });




  }

  subscribeOnTelegrams() {
    this.telegramService.backEndTelegram.subscribe(res => {

      if (res.telId == 1113) {
        // window.alert(res)

        this.testcode=res.telData.testCode;
        this.testDateTime=res.telData.testDateTime;
        this.testElapsedTime=res.telData.testElapsedTime;
        this.testResult=res.telData.testResult;
        this.error=res.telData.error;


        this.spinnerButtonOptions.active = false;
      }
    });
  }


  gettest() {

    console.log("start")
    this.TelService.gettest().subscribe(res => {
      console.log(res)
      if (res.telData.tests) {
        this.testdatacource = res.telData.tests as test[];
      }
      else {
        // TODO: rectify
        console.log("not");
      }
    });
  }

  //#endregion

  // someFunc(): void {
  //   this.spinnerButtonOptions.active = true;
  //   setTimeout(() => {
  //     this.spinnerButtonOptions.active = false;
  //   }, 3500)
  // }

  ngOnInit(): void {
  }

}
