import { IAlertLogItem } from '@arc.module/models/interfaces/alert-log-item.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'arc-toolbar-presenter',
  template: `<arc-toolbar-view
  [newLog]="newLog"
  (toggle)="toggled($event)"

   ></arc-toolbar-view>`
})
export class ArcToolbarPresenter implements OnInit {

  @Input() newLog: IAlertLogItem;
  @Output("toggle") toggleEmitter = new EventEmitter();

  constructor() { }

  async ngOnInit() {
  }

  toggled(e) {
    this.toggleEmitter.emit(e);
  }

}
