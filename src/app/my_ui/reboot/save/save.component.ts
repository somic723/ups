<<<<<<< HEAD
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../reboot.component';
=======
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
>>>>>>> 29d67876109c3d5db583f2b22e89393490b46fde

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
<<<<<<< HEAD
  constructor(
    public dialogRef: MatDialogRef<SaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
=======

  constructor(
    public dialogRef: MatDialogRef<SaveComponent>,) {}
>>>>>>> 29d67876109c3d5db583f2b22e89393490b46fde

  onNoClick(): void {
    this.dialogRef.close();
  }
<<<<<<< HEAD

=======
>>>>>>> 29d67876109c3d5db583f2b22e89393490b46fde
  ngOnInit(): void {
  }

}
