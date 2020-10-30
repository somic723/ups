import { Component, OnInit } from '@angular/core';


import { TelegramLogPageService } from '../../../../../services/telegram-log.service'
import { MenuPageService } from '../../../../../services/menu-page.service'
import { TelegramDefinitionPageService } from '../../../../../services/telegram-definition-page.service'
import { IUnit } from '@arc.module/models/interfaces/unit.interface';
import { ITelegramLogFilter } from '@arc.module/models/interfaces/telegram-log-filter.interface';
import { ITelegram } from '@arc.module/models/interfaces/telegram.interface';


@Component({
  selector: 'telegram-filter-presenter',
  template: `<telegram-filter-view
  (filterClick)="onFilterClick($event)"
  [lastHours]='lastHours'
  [telegrams]='telegrams'
  [units]='units'
  ></telegram-filter-view>`
})
export class TelegramFilterPresenter implements OnInit {

  telegrams: ITelegram[];
  units: IUnit[];
  lastHours: number[];
  telegramfilter: ITelegramLogFilter;

  constructor(
    private telegramservice: TelegramLogPageService,
    private menuPageService: MenuPageService,
    private telegramDefinitionService: TelegramDefinitionPageService
  ) {

  }

  onFilterClick(telegramfilter: ITelegramLogFilter) {
    this.telegramservice.datafilter.next(telegramfilter);
  }

  async ngOnInit() {
    this.units = await this.menuPageService.GetAllUnits2();
    this.telegrams = await this.telegramDefinitionService.GetTelegrams();
    this.lastHours = this.telegramservice.getLastHour();
  }

}
