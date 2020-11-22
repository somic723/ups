import { TokenService } from './../../../../services/token.service';
import { IModifyUser } from '@arc.module/models/interfaces/modify-user.interface';
import { IMenu } from '@arc.module/models/interfaces/menu.interface';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

import { ArcTelegramService } from '../../../../services/arcTelegram.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { UserEditorPresenter } from '../../user-editor/user-editor-presenter';
import { MatDialog } from '@angular/material/dialog';
import { IReportGroup } from '@arc.module/models/interfaces/report-group.interface';
import { Telegram } from '@arc.module/models/classes/telegram.class';
import { IReport } from '@arc.module/models/interfaces/report.interface';
import { IUser } from '@arc.module/models/interfaces/user.interface';



@Component({
  selector: 'arc-sidenav-view',
  templateUrl: './arc-sidenav-view.html',
  styleUrls: ['./arc-sidenav-view.scss']
})
export class ArcSidenavView implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;
  @Input() menus: IMenu[] = [];
  @Input('reports') reportGroups: IReportGroup[];
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>()
  @Input() user: IUser

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.warn("this.user", this.user)
  }

  onClick(item) {
    // this.drawer.close();
    this.toggle.emit();
    this.router.navigate(["/" + item.route]);
  }

  navigateToReport(data: IReport) {
    this.toggle.emit();
    window.open(`#/report-view;reportName=${data.name};reportRevision=${data.revision};serverAddress=${data.serverAddress};`);
  }

  logOut() {
    this.toggle.emit();
    this.router.navigate(["/login"]);
  }

  editUser() {

    let newUserToEdit: IModifyUser = {
      name: this.user.name,
      family: this.user.family,
      username: this.user.username,
      password: "",
      oldPassword: ""
    };

    const dialogRef = this.dialog.open(UserEditorPresenter, {
      maxWidth: '400px',
      data: newUserToEdit
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { //submit without error
        this.logOut();
      }
    });

  }

}
