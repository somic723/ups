import { logging } from 'protractor';
import { AuthService } from '@arc.module/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { IAlertLogItem } from '@arc.module/models/interfaces/alert-log-item.interface';


@Component({
  selector: 'arc-footer-presenter',
  template: `<arc-footer-view
  *ngIf="loggedIn"
    [newLog]="newLog"
   ></arc-footer-view>`
})
export class ArcFooterPresenter implements OnInit {

  loggedIn = false;
  @Input() newLog: IAlertLogItem;
  constructor(private authService: AuthService) {
    authService.loginStatus.subscribe(res => {
      this.loggedIn = res;
    })

  }

  async ngOnInit() {
  }

}
