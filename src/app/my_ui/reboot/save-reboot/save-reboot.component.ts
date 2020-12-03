<<<<<<< HEAD
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../reboot.component';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 29d67876109c3d5db583f2b22e89393490b46fde

@Component({
  selector: 'app-save-reboot',
  templateUrl: './save-reboot.component.html',
  styleUrls: ['./save-reboot.component.scss']
})
export class SaveRebootComponent implements OnInit {

<<<<<<< HEAD
  constructor(
    public dialogRef: MatDialogRef<SaveRebootComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
=======
  constructor() { }
>>>>>>> 29d67876109c3d5db583f2b22e89393490b46fde

  ngOnInit(): void {
  }

}
