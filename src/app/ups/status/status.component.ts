import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IdentificationComponent } from '../identification/identification.component';
import { MyTelegramService } from "src/app/services/my-telegram.service";
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';




//#region interface
export interface PeriodicElement {
  UPSName: string;
  Manufacture: string;
  SerialNumber: string;
  Model: string;
  SoftwareVersion: string;
  AgentVersion: Float64Array;
  ComPortVesion: Float64Array;
  UpsAttachedDevice: string;
  upscode: string;
  ISActive: boolean;
  HostName: string;
  OperatingSystem: string;
  FirmwareVersion: string;
  FirmwareDt: string;
  SystemUpTime: string;
  MacAddress: string;
  IPAddress: string;
  SubNetMask: string;
  DefaultGateWay: string;
}
//#endregion

//#region sample data
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 'Power Supply on', name: 'AC'},
//   {position: 'Input Voltage', name: '220'},
//   {position: 'Output Voltage', name: '220'},
//   {position: 'Charging Percent', name: '100%'},
//   {position: 'Minute Remaining', name: '180 min', },

// ];

//#endregion


//#region @component
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
//#endregion


export class StatusComponent implements OnInit {


  //#region "data source info "
  displayedColumns: string[] = ['UPSName', 'Manufacture'];

  dataSource: PeriodicElement[];
  dataSource1: PeriodicElement[];
  //#endregion

  //#region constructor
  constructor(public dialog: MatDialog, public TelService: MyTelegramService
  ) {


  }
  //#endregion constructor

  //#region function


  // getBatteryInfo() {

  //   console.log("start")
  //   this.TelService.getBatteryInfo(1).subscribe(res => {
  //     console.log(res)
  //     if (res.telData.upsInfoList[0].upscode==1) {
  //       this.dataSource = res.telData as PeriodicElement[];
  //     } else if(res.telData.upsInfoList[1].upscode==2) {
  //       this.dataSource1 = res.telData as PeriodicElement[];
  //     }
  //     else{
  //       // TODO: rectify
  //       console.log("not");
  //     }
      

  //   });
  // }

  openDialog() {
    this.dialog.open(IdentificationComponent, {
      width: '400px',
      height: '500px',
    });
  }

  //#endregion



  ngOnInit(): void {
  }



}
