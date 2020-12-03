import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../reboot.component';

@Component({
  selector: 'app-save-reboot',
  templateUrl: './save-reboot.component.html',
  styleUrls: ['./save-reboot.component.scss']
})
export class SaveRebootComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SaveRebootComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
