import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserPageService } from '../../../../../services/user-page.service'
import { MatSnackBar } from '@angular/material/snack-bar';

import { IServerResponse } from '@arc.module/models/interfaces/server-response.interface';
import { IUserGroup } from '@arc.module/models/interfaces/user-group.interface';

@Component({

  selector: 'group-add-edit-presenter',
  template: `
  <group-add-edit-modal-view
    [group]="_group"
    (result)="submitGroup($event)"
  >
  </group-add-edit-modal-view>
  `,
})
export class GroupAddEditPresenter implements OnInit {

  _group: IUserGroup;

  constructor(private userPageService: UserPageService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<GroupAddEditPresenter>,
    @Inject(MAT_DIALOG_DATA) public data: IUserGroup) {
    if (data != null) {
      this._group = data;
    }
  }

  ngOnInit() {
  }

  async submitGroup(group: IUserGroup) {
    if (group) {
      let res: IServerResponse = await this.userPageService.ModifyUserGroup(group);
      this.snackBar.open(res.message, '', { duration: 2000 });
      if (res.telId === 200) {
        this.dialogRef.close(group);
      }
    }
  }

}
