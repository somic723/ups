import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../reboot.component';
@Component({
  selector: 'app-defult',
  templateUrl: './defult.component.html',
  styleUrls: ['./defult.component.scss']
})
export class DefultComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DefultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
