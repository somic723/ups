import { Component, OnInit, Input } from '@angular/core';
import { IAlertLogItem } from '@arc.module/models/interfaces/alert-log-item.interface';


@Component({
  selector: 'alert-log-list-view',
  templateUrl: './alert-log-list-view.html',
  styleUrls: ['./alert-log-list-view.scss']
})
export class AlertLogListView implements OnInit {

  @Input() alertLogs: IAlertLogItem[];

  constructor() { }

  ngOnInit(): void {

  }

}
