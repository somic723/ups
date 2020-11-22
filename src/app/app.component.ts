import { TelegramService } from './../../@arc.module/services/telegram.service';

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@arc.module/services/auth.service';
import { ARC_VERSION } from '@arc.module/arc.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _version = ARC_VERSION;
  loginStatus: boolean = false
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AuthService,
    private router: Router,
    private tel: TelegramService,
    public dialog: MatDialog,
    public changeDetectorRef: ChangeDetectorRef,
  ) { }


  ngOnInit(): void {
    let i = 0;
    this.tel.backEndTelegram.subscribe(data => {
      console.warn("backEndTelegram", data)
    })

    this.auth.loginStatus.subscribe(status => {
      this.loginStatus = status
      this.changeDetectorRef.detectChanges()
    })

    // setInterval(() => {
    //   i++;
    //   if (this.auth.user) {
    //     const log: IAlertLogItem = {
    //       alertLogId: i,
    //       logText: 'sdfgsdfgsdfgsdgsdfgvsd' + i.toString(),
    //       type: i%2==1?1:3,
    //       popup: i%2==0,
    //       logDate: '2020-05-05',
    //       alertId: "1",
    //       title: "title " + i.toString(),
    //       sound: i%4==0
    //     }
    //     this.newLogArrived = log;
    //   }
    // }, 5000)
  }

}
