import { Component, OnInit, Input } from '@angular/core';
import { IrisaDate } from '../../../../utilities/DateUtility'

import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AlertLogListPresenter } from './../components/alert-log-list/alert-log-list-presenter';
import { IAlertLogItem } from '@arc.module/models/interfaces/alert-log-item.interface';

@Component({
  selector: 'arc-footer-view',
  templateUrl: './arc-footer-view.html',
  styleUrls: ['./arc-footer-view.scss']
})
export class ArcFooterView implements OnInit {

  dateType = "JALALI";
  dateTime = "";
  dateTimeTooltip = "";

  footerLogs: IAlertLogItem[] = [];
  @Input() set newLog(value: IAlertLogItem) {
    if (value && value.type != 3) { // type != danger
      this.footerLogs.push(value);
      if (this.footerLogs.length > 10) {
        this.footerLogs.splice(0, 1);
      }
    }
  }

  constructor(
    private _bottomSheet: MatBottomSheet
  ) { }


  ngOnInit(): void {
    setInterval(() => {
      const d = new IrisaDate(true);
      const d1 = new IrisaDate(false);
      if (this.dateType == "JALALI") {
        this.dateTime = d.toString() + "-" + d.dayOfWeek();
        this.dateTimeTooltip = d1.toString(true) + "-" + d1.dayOfWeek();
      } else {
        this.dateTime = d1.toString() + "-" + d1.dayOfWeek();
        this.dateTimeTooltip = d.toString(true) + "-" + d.dayOfWeek();
      }
    }, 1000);


    // for (let i = 1; i <= 5; i++) {
    //   let alertLog: IAlertLogItem = {
    //     alertId: "",
    //     alertLogId: i,
    //     logDate: "",
    //     logText: "footer log "+i.toString(),
    //     popup: true,
    //     sound: true,
    //     title: "title" + i.toString(),
    //     type: 2
    //   }
    //   this.footerLogs.push(alertLog);
    // }

  }

  changeDateType() {
    if (this.dateType == "JALALI") this.dateType = "MILADI";
    else this.dateType = "JALALI";
  }

  clickLog() {
    this._bottomSheet.open(AlertLogListPresenter, {
      data: this.footerLogs
    });
  }

}
