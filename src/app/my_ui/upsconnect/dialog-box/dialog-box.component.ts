import { Component, OnInit,Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

export interface UsersData {
  hostId: number;
  hostName: string;
  ipaddress: string;
  username: string;
  password: string;
  chargePercent: number;
  chargeMinute: number;
  action:string
}

//#region interface control add host
interface charge {
  name: string;
  symbol: string;
}
//#endregion

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {




//#region form control addhost
chargeControl = new FormControl('', Validators.required);
selectFormControl = new FormControl('', Validators.required);
charge: charge[] = [
  {name: 'chargePercent', symbol: '%'},
  {name: 'chargeMinute', symbol: 'Min'},
];
//#endregion




  action:string;
  local_data:UsersData;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
