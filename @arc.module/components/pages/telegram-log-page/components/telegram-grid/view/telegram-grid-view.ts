
import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditResponseDataPresenter } from '../../edit-response-data/edit-response-data-presenter'
import { IUnit } from '@arc.module/models/interfaces/unit.interface';
import { ITelegramLogList } from '@arc.module/models/interfaces/telegram-log-list.interface';
import { ITelegram } from '@arc.module/models/interfaces/telegram.interface';
import { IFullTelegramLogItem } from '@arc.module/models/interfaces/full-telegram-log-item.interface';
import { ITelegramLogFilter } from '@arc.module/models/interfaces/telegram-log-filter.interface';
import { ISimpleTelegramLogItem } from '@arc.module/models/interfaces/simple-telegram-log-item.interface';





@Component({
  selector: 'telegram-grid-view',
  templateUrl: './telegram-grid-view.html',
  styleUrls: ['./telegram-grid-view.scss']
})
export class TelegramGridView implements OnInit {

  selectedRowIndex?: number;
  displayedColumns = [];
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  telegramLogList: ITelegramLogList;
  @Input('telegramLogList') set inputTelegrams(value: ITelegramLogList) {
    this.selectedTelegramLogData = null;
    this.telegramLogList = value;
    this.selectedRowIndex = null;
    console.warn("telegramLogList view", this.telegramLogList)
  }

  @Input() telegrams: ITelegram[];

  // requestData: JSON = {} as JSON
  // responseData: JSON = {} as JSON
  requestData
  responseData
  private _selectedTelegramLogData: IFullTelegramLogItem
  @Input() set selectedTelegramLogData(val: IFullTelegramLogItem) {
    if (val) {
      this._selectedTelegramLogData = val
      // this.requestData = JSON.parse(this._selectedTelegramLogData?.requestData);
      // this.responseData = JSON.parse(this._selectedTelegramLogData?.responseData);
      this.requestData = JSON.parse(this._selectedTelegramLogData?.requestData);
      this.responseData = JSON.parse(this._selectedTelegramLogData?.responseData);
    }
  };

  get selectedTelegramLogData(): IFullTelegramLogItem {
    return this._selectedTelegramLogData
  }


  @Input() allUnits: IUnit[];
  @Output() pagerFilter: EventEmitter<ITelegramLogFilter> = new EventEmitter<ITelegramLogFilter>();
  @Output() telegramLogSelected: EventEmitter<number> = new EventEmitter<number>();
  columns = [
    { columnDef: 'requestId', header: 'Telegram Id', cell: (element: ISimpleTelegramLogItem) => `${element.requestId}` },
    { columnDef: 'telegramTitle', header: 'tel name', cell: (element: any) => `` },
    { columnDef: 'telegramLogId', header: 'telegramLogId', cell: (element: ISimpleTelegramLogItem) => `${element.telegramLogId}` },
    { columnDef: 'srcUnitFk', header: 'srcUnitFk', cell: (element: ISimpleTelegramLogItem) => `${element.srcUnitFk}` },
    { columnDef: 'dstUnitFk', header: 'dstUnitFk', cell: (element: ISimpleTelegramLogItem) => `${element.dstUnitFk}` },
    { columnDef: 'telegramLogDate', header: 'telegramLogDate', cell: (element: ISimpleTelegramLogItem) => `${element.telegramLogDate}` },
    { columnDef: 'simulated', header: 'simulated', cell: (element: ISimpleTelegramLogItem) => `${element.simulated}` },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // this.pageSizeOptions = [5, 10, 25, 100];
    // this._dataSource.paginator = this.paginator;
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  openDialog() {
    let selectedLogToSimulate = { ...this.selectedTelegramLogData };
    let changeresponse: any;
    const dialogRef = this.dialog.open(EditResponseDataPresenter, {
      maxWidth: '700px',
      data: { selectedLog: selectedLogToSimulate, units: this.allUnits }
    });
    dialogRef.afterClosed().subscribe(result => {
      changeresponse = result;
    });
  }

  public selectTelegramLog(telegramLog: ISimpleTelegramLogItem) {
    this.selectedTelegramLogData = null;
    this.telegramLogSelected.emit(telegramLog.telegramLogId)
  }

  getUnitById(unitId: number) {
    return this.allUnits.find(x => x.unitId === unitId);
  }

  changePage(value) {
    let previousPageIndex = value.previousPageIndex;
    let pageSize = 100;
    let pageIndex = value.pageIndex;
    let lastLogId: number = 0;
    let direction: number = 0;

    if (pageIndex > previousPageIndex) {
      direction = 1;
      lastLogId = this.telegramLogList.telegramLogItems[this.telegramLogList.telegramLogItems.length - 1].telegramLogId
    }
    else if (pageIndex < previousPageIndex) {
      direction = -1;
      lastLogId = this.telegramLogList.telegramLogItems[0].telegramLogId
    }

    let filters: ITelegramLogFilter = {
      direction: direction,
      pageSize: pageSize,
      lastLogId: lastLogId
    }
    this.pagerFilter.emit(filters);
  }

  // get code() {
  //   try {
  //     return JSON.stringify(this.data, null, 2);
  //   }
  //   catch (e) {
  //     console.log('error occored get code');
  //   };
  // }

  // set code(v) {
  //   try {
  //     this.data = JSON.parse(v);
  //   }
  //   catch (e) {
  //     console.log('error occored on set code');
  //   };
  // }
  // editJson() {

  //   try {
  //     this.editmode = !this.editmode;
  //   }
  //   catch (e) {
  //     console.log('error occored on editJson');
  //   };


  // }
  // send(telegramforsend: ITelegram) {
  //   //telegramforsend.date = new Date();
  //   this.sendtelegramClick.emit(telegramforsend);
  // }


  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   if (setPageSizeOptionsInput) {
  //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //   }
  // }
}
