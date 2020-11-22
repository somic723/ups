import { Component, OnInit } from '@angular/core';
import { MyTelegramService } from "src/app/services/my-telegram.service";



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
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {

    displayedColumns: string[] = ['position','name'];
  
    dataSource = ELEMENT_DATA;

    constructor(public TelService: MyTelegramService
      ) {
        this.getBatteryInfo();
    
    
      }

  getBatteryInfo() {

    console.log("start")
    // this.TelService.getBatteryInfo(1).subscribe(res => {
    //   console.log(res)
    //   if (res.telData.upsInfoList[0].upscode==1) {
    //     this.dataSource = res.telData as PeriodicElement[];
    //   } else if(res.telData.upsInfoList[1].upscode==2) {
    //     this.dataSource = res.telData as PeriodicElement[];
    //   }
    //   else{
    //     // TODO: rectify
    //     console.log("not");
    //   }
      

    // });
  }
  ngOnInit(): void {
  }

}
