import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TelegramService } from '@arc.module/services/telegram.service';
import { MyTelegramService } from 'src/app/services/my-telegram.service';
import { DefultComponent } from './defult/defult.component';
import { SaveRebootComponent } from './save-reboot/save-reboot.component';
import { SaveComponent } from "./save/save.component";

export interface DialogData {
  descriptions: string;
  name: string;
}





@Component({
  selector: 'app-reboot',
  templateUrl: './reboot.component.html',
  styleUrls: ['./reboot.component.scss']
})
export class RebootComponent implements OnInit {
  descriptions: string;
  name: string;
  errorFromBackEnd:string=''
  resultFromBackEnd:string=''


  constructor(public dialog: MatDialog,public TelService: MyTelegramService, private telegramService: TelegramService) {}

  openSaveDialog(): void {
    const dialogRef = this.dialog.open(SaveComponent, {
      width: '280px',
      data: {name: this.name, descriptions: this.descriptions}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.descriptions = result;
      console.log(this.descriptions)

      console.log("start tel 1117")
      this.TelService.savesetting(this.descriptions).subscribe(res => {
        console.log(res.telData)
        if (res.telData.requestTelData=null) {

        console.log(res.telData.message);
        this.errorFromBackEnd=res.telData.message;

        console.log('erorr')
        console.log( this.errorFromBackEnd);
        }
        else {
          console.log(res.telData)
        }
      });
    
    });
  }



  openRebootDialog(): void {
    const dialogRef = this.dialog.open(SaveRebootComponent, {
      width: '250px',
      data: {name: this.name, descriptions: this.descriptions}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.descriptions = result;
      console.log(this.descriptions)

    });
  }

  openDefaultDialog(): void {
    const dialogRef = this.dialog.open(DefultComponent, {
      width: '250px',
      data: {name: this.name, descriptions: this.descriptions}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.descriptions = result;
      console.log(this.descriptions)

    });
  }
  ngOnInit(): void {
  }

}
