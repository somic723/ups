import { IModifyUser } from '@arc.module/models/interfaces/modify-user.interface';
import { IMenu } from '@arc.module/models/interfaces/menu.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

import { ArcTelegramService } from '../../../../services/arcTelegram.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { UserEditorPresenter } from '../../user-editor/user-editor-presenter';
import { MatDialog } from '@angular/material/dialog';
import { IReportGroup } from '@arc.module/models/interfaces/report-group.interface';
import { Telegram } from '@arc.module/models/classes/telegram.class';



@Component({
  selector: 'arc-sidenav-view',
  templateUrl: './arc-sidenav-view.html',
  styleUrls: ['./arc-sidenav-view.scss']
})
export class ArcSidenavView implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;
  menus: IMenu[] = [];
  reportGroups: IReportGroup[];

  constructor(
    public auth: AuthService,
    private telService: ArcTelegramService,
    private router: Router,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.auth.loginStatus.subscribe(res => {
      this.menus = [];
      this.reportGroups = [];
      if (res) {
        let tel = new Telegram(31, null);
        this.telService.send(tel).then(res1 => {
          const menus = res1.telData.body;
          menus.forEach(element => {
            if (!(this.menus.find(a => a.menuId == element.mId)))
              this.menus.push({
                captionEn: element.mCaption,
                captionFa: element.mCaption,
                menuId: element.mId,
                position: element.mPos,
                titleEn: element.mTitle,
                titleFa: element.mTitle,
                subMenus: []
              });
          });
          menus.forEach(element => {
            var menu = this.menus.find(a => a.menuId == element.mId);
            menu.subMenus.push({
              captionEn: element.sCaption,
              captionFa: element.sCaption,
              submenuId: element.sId,
              position: element.sPos,
              route: element.sRoute,
              shortcut: element.sShortcut,
              titleEn: element.sTitle,
              titleFa: element.sTitle,
              menuFk: element.mId
            });

          });


          tel.telId = 32;
          this.telService.send(tel).then(res2 => {
            const reports = res2.telData.body;
            console.log(reports);



            //TODO: fix reports
            //   reports.forEach(element => {
            //     var group = this.reports.find(a => a.id == element.reportGroupFk);

            //     if (!(this.reports.find(a => a.id == element.reportGroupFk)))
            //     group.reports.push({
            //       id: element.reportId,
            //       name: element.reportName,
            //       revision: element.reportRevision,
            //       title: element.reportTitle
            //     });
            // });



            console.log(this.menus[0]);

            this.router.navigate(["/" + this.menus[0].subMenus[0]["route"]]);

          });
        });
      }
    })
  }

  onClick(item) {
    this.router.navigate(["/" + item.route]);
  }

  logOut() {
    this.router.navigate(["/"]);
    this.drawer.close();
  }

  editUser() {

    let newUserToEdit: IModifyUser = {
      name: this.auth.user.name,
      family: this.auth.user.family,
      username: this.auth.user.username,
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
