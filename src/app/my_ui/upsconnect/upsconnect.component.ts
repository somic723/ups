
//#region import
import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { MyTelegramService } from "src/app/services/my-telegram.service";
import { TelegramService } from '@arc.module/services/telegram.service';


import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
//#endregion


//#region  hostlist interface
export interface host {
  hostId: number;
  hostName: string;
  ipaddress: string;
  username: string;
  password: string;
  chargePercent: number;
  chargeMinute: number
}

const ELEMENT_DATA: host[] = [
  { hostId: 1, hostName: 'H2Server', ipaddress: '1560608769632', username: 'namazi', password: '12345', chargePercent: 10, chargeMinute: 10 },
  { hostId: 2, hostName: 'HNX', ipaddress: '1560608769632', username: 'namazi', password: '12345', chargePercent: 10, chargeMinute: 10 },
  { hostId: 3, hostName: 'H2Server', ipaddress: '1560608769632', username: 'namazi', password: '12345', chargePercent: 10, chargeMinute: 10},
  { hostId: 4, hostName: 'HNX', ipaddress: '1560608769632', username: 'namazi', password: '12345', chargePercent: 10, chargeMinute: 10 },
];
//#endregion


@Component({
  selector: 'app-upsconnect',
  templateUrl: './upsconnect.component.html',
  styleUrls: ['./upsconnect.component.scss']
})
export class UpsconnectComponent implements OnInit {


errorFromBackEnd:string=''


  //#region host datasource
  displayedColumns: string[] = ['hostId', 'hostName', 'ipaddress', 'username', 'password', 'chargePercent', 'chargeMinute', 'action'];
  ELEMENT_DATA = [] as host[];
  dataSource = ELEMENT_DATA;
  addhost: host
//#endregion


  @ViewChild(MatTable, { static: true }) table: MatTable<any>;


  //#region constructor
  constructor(public dialog: MatDialog, public TelService: MyTelegramService, private telegramService: TelegramService) {


    this.subscribeList()
    this.getlist()
  }
//#endregion

  //#region host function
  getlist() {
    console.log("start tel 1125")
    this.TelService.getlist().subscribe(res => {
      console.log("log")
      console.warn(res.telData)
      if (res.telData) {

        this.ELEMENT_DATA = res.telData.hostList as host[];
        this.dataSource = this.ELEMENT_DATA

      }
      else {
        console.log("not");
      }
    });
  }

  subscribeList() {
    this.telegramService.backEndTelegram.subscribe(res => {
      if (res.telId == 1125) {
        console.log('subscribe 1125')
        this.ELEMENT_DATA = res.telData.alarms as host[];


        // this.input = res.telData.inputs as Input[];

      }
    });
  }

  addlist(add: host) {
    console.log("start tel 1126")
    this.TelService.addlist(add).subscribe(res => {
      if (res.telData.stackTrace==="") {
        console.log(res.telData.message);
        this.errorFromBackEnd=res.telData.message;
      }
      else {
        console.log('add or update ')
        console.log(res.telData)
        this.ELEMENT_DATA = res.telData.hostList as host[];
        this.dataSource = this.ELEMENT_DATA;
        this.errorFromBackEnd='';


      }
    });
  }
  deletitemfromlist(deleteItem:number) {
    console.log("start tel 1127")
    this.TelService.deletitemfromlist(deleteItem).subscribe(res => {
      console.log("log")
      console.warn(res.telData)

      if (res.telData.stackTrace==="") {
        console.log(res.telData.message);
        this.errorFromBackEnd=res.telData.message;

     
      }
      else {
        console.log(res.telData)
        this.ELEMENT_DATA = res.telData.hostList as host[];
        this.dataSource = this.ELEMENT_DATA;
        this.errorFromBackEnd='';

      }
    });
  }
  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '300px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }
  addRowData(row_obj) {
    // this.dataSource.push({
    //   hostId: -1,
    //   hostName: row_obj.hostName,
    //   ipaddress: row_obj.ipaddress,
    //   username: row_obj.username,
    //   password: row_obj.password,
    //   chargePercent: row_obj.chargePercent,
    //   chargeMinute: row_obj.chargeMinute,

    // });
    this.addhost = {
      "hostId": 0, "hostName": row_obj.hostName
      , "ipaddress": row_obj.ipaddress, "username": row_obj.username, "password": row_obj.password
      , "chargePercent": row_obj.chargePercent,
      "chargeMinute": row_obj.chargeMinute
    };

    this.addlist(this.addhost)
    // this.table.renderRows();

  }
  updateRowData(row_obj) {
    this.addhost = {"hostId": row_obj.hostId, "hostName": row_obj.hostName,"ipaddress": row_obj.ipaddress, "username": row_obj.username, "password": row_obj.password,"chargePercent": row_obj.chargePercent,"chargeMinute": row_obj.chargeMinute,
      };
      this.addlist(this.addhost)
  }
  deleteRowData(row_obj) {
    this.deletitemfromlist(row_obj.hostId)

    // this.dataSource = this.dataSource.filter((value, key) => {
      
    //   return value.hostId != row_obj.hostId;
    // });
  }
//#endregion

  ngOnInit(): void {
  }

}
