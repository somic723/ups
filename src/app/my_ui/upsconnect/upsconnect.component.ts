import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { MyTelegramService } from "src/app/services/my-telegram.service";
import { TelegramService } from '@arc.module/services/telegram.service';


import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';


export interface UsersData {
  hostId: number;
  hostName: string;
  ipaddress: string;
  userName: string;
  password: string;
  remainingChargePecent: number;
  remainingChargeMinute: number;
  shutdownOrder: number
}



const ELEMENT_DATA: UsersData[] = [
  { hostId: 1, hostName: 'H2Server', ipaddress: '1560608769632', userName: 'namazi', password: '12345', remainingChargePecent: 10, remainingChargeMinute: 10, shutdownOrder: 1 },
  { hostId: 2, hostName: 'HNX', ipaddress: '1560608769632', userName: 'namazi', password: '12345', remainingChargePecent: 10, remainingChargeMinute: 10, shutdownOrder: 2 },
  { hostId: 3, hostName: 'H2Server', ipaddress: '1560608769632', userName: 'namazi', password: '12345', remainingChargePecent: 10, remainingChargeMinute: 10, shutdownOrder: 3 },
  { hostId: 4, hostName: 'HNX', ipaddress: '1560608769632', userName: 'namazi', password: '12345', remainingChargePecent: 10, remainingChargeMinute: 10, shutdownOrder: 4 },
];


@Component({
  selector: 'app-upsconnect',
  templateUrl: './upsconnect.component.html',
  styleUrls: ['./upsconnect.component.scss']
})
export class UpsconnectComponent implements OnInit {
  displayedColumns: string[] = ['hostId', 'hostName', 'ipaddress', 'userName', 'password', 'remainingChargePecent', 'remainingChargeMinute', 'shutdownOrder', 'action'];



  ELEMENT_DATA = [] as UsersData[];
  dataSource = ELEMENT_DATA;
  add: UsersData






  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog, public TelService: MyTelegramService, private telegramService: TelegramService) {


    this.subscribeList()
    this.getlist()
  }

  getlist() {
    console.log("start tel 1125")
    this.TelService.getlist().subscribe(res => {
      console.log("log")
      console.warn(res.telData)
      if (res.telData) {

        this.ELEMENT_DATA = res.telData.hostList as UsersData[];
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
        this.ELEMENT_DATA = res.telData.alarms as UsersData[];


        // this.input = res.telData.inputs as Input[];

      }
    });
  }

  addlist(add: UsersData) {
    console.log("start tel 1126")
    this.TelService.addlist(add).subscribe(res => {
      console.log("log")
      console.warn(res.telData)
      if (res.telData == 'Ok') {
        this.getlist()
      }
      else {
        console.log("not");
      }
    });
  }
  deletitemfromlist(deleteItem:number) {
    console.log("start tel 1127")
    this.TelService.deletitemfromlist(deleteItem).subscribe(res => {
      console.log("log")
      console.warn(res.telData)
      if (res.telData == 'Ok') {
        this.getlist()
      }
      else {
        console.log("not");
      }
    });
  }



  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
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
    this.dataSource.push({
      hostId: -1,
      hostName: row_obj.hostName,
      ipaddress: row_obj.ipaddress,
      userName: row_obj.userName,
      password: row_obj.password,
      remainingChargePecent: row_obj.remainingChargePecent,
      remainingChargeMinute: row_obj.remainingChargeMinute,
      shutdownOrder: row_obj.shutdownOrder,

    });
    this.add = {
      "hostId": -1, "hostName": row_obj.hostName
      , "ipaddress": row_obj.ipaddress, "userName": row_obj.userName, "password": row_obj.password
      , "remainingChargePecent": row_obj.remainingChargePecent,
      "remainingChargeMinute": row_obj.remainingChargeMinute, "shutdownOrder": row_obj.shutdownOrder
    };

    this.addlist(this.add)
    this.table.renderRows();

  }
  updateRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.hostId == row_obj.hostId) {
        value.hostName = row_obj.hostName;
        value.ipaddress = row_obj.ipaddress;
        value.userName = row_obj.userName;
        value.password = row_obj.password;
        value.remainingChargePecent = row_obj.remainingChargePecent;
        value.remainingChargeMinute = row_obj.remainingChargeMinute;
        value.shutdownOrder = row_obj.shutdownOrder;

      }
      this.add = {"hostId": row_obj.hostId, "hostName": row_obj.hostName,"ipaddress": row_obj.ipaddress, "userName": row_obj.userName, "password": row_obj.password,"remainingChargePecent": row_obj.remainingChargePecent,"remainingChargeMinute": row_obj.remainingChargeMinute, "shutdownOrder": row_obj.shutdownOrder
      };
      this.addlist(this.add)
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      
      this.deletitemfromlist(row_obj.hostId)
      return value.hostId != row_obj.hostId;
    });
  }



  ngOnInit(): void {
  }

}
