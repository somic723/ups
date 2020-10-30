import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertLogService } from '../../../../../services/alert-log.service';
import { PageEvent } from '@angular/material/paginator';

import { Subscription } from 'rxjs';
import { IAlertLogFilter } from '@arc.module/models/interfaces/alert-log-filter.interface';
import { IAlertLogList } from '@arc.module/models/interfaces/alert-log-list.interface';

@Component({
  selector: 'alert-log-table2-presenter',
  template: `
  <alert-log-table2-view
    [alertLogList]="alertLogList"
    (pagerFilter)="searchByPaginator($event)"
  >
  </alert-log-table2-view>
  `,
})
export class AlertLogTable2Presenter implements OnInit, OnDestroy {
  private _toUnsubscribe: Subscription[] = [];
  pageNumber: number
  filterData: IAlertLogFilter
  alertLogList: IAlertLogList

  constructor(private alertLogService: AlertLogService) {
    this._toUnsubscribe.push(
      alertLogService.searchResult.subscribe(data => {
        this.alertLogList = data;
      })
    );
  }

  ngOnDestroy(): void {
    this._toUnsubscribe.forEach(element => {
      element.unsubscribe();
    });
  }

  ngOnInit(): void {

  }

  searchByPaginator(event: IAlertLogFilter) {
    this.alertLogService.searchFilters.next(event);
  }


}
