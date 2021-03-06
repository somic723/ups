import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms'
import { ITelegramLogFilter } from '@arc.module/models/interfaces/telegram-log-filter.interface';
import { ITelegram } from '@arc.module/models/interfaces/telegram.interface';
import { IUnit } from '@arc.module/models/interfaces/unit.interface';
import { DateUtility } from '@arc.module/utilities/DateUtility';



@Component({
  selector: 'telegram-filter-view',
  templateUrl: './telegram-filter-view.html',
  styleUrls: ['./telegram-filter-view.scss']
})
export class TelegramFilterView implements OnInit, OnDestroy {
  // telegramIdCtrl = new FormControl();
  // telegramTitleCtrl = new FormControl();
  // filteredTelegramsById: Observable<ITelegram[]>;
  // filteredTelegramsByTitle: Observable<ITelegram[]>;

  // @ViewChild('telegramTitleInput') telegramTitleInput: ElementRef<HTMLInputElement>;
  // @ViewChild('telegramIdInput') telegramIdInput: ElementRef<HTMLInputElement>;
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // selectedTelegrams: ITelegram[] = [];
  // filtervalue: string;
  //selectedTelegrams: number[];
  //filteredTelegrams: Observable<ITelegram[]>;
  //@Input() telegrams: Telegram[];
  // @Input('telegrams') set telegramsFromService(value: ITelegram[]) {
  //   this.telegrams = value;
  //   this.filteredTelegramsById = this.telegramIdCtrl.valueChanges.pipe(
  //     startWith(null),
  //     map((telegram: string | null) => {
  //       if (typeof telegram === "string") {
  //         if (this._isNumeric(telegram))
  //           return telegram ? this._filterTelegramId(parseInt(telegram)) : this.telegrams;
  //         else {
  //           this.telegramIdInput.nativeElement.value = '';
  //           this.telegramIdCtrl.setValue(null);
  //           return this.telegrams;
  //         }
  //       }
  //       else {
  //         return this.telegrams;
  //       }
  //     })
  //   );

  //   this.filteredTelegramsByTitle = this.telegramTitleCtrl.valueChanges.pipe(
  //     startWith(null),
  //     map((telegram: string | null) => {
  //       if (typeof telegram === "string")
  //         return telegram ? this._filterTelegramTitle(telegram) : this.telegrams;
  //       else
  //         return this.telegrams;
  //     })
  //   );
  // }

  timer;
  lastFilters: ITelegramLogFilter = {
    direction: 1,
    lastLogId: 0,
    pageSize: 100,
  };
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  @Input() telegrams: ITelegram[];
  minDate: Date;
  maxDate: Date;
  selectedRequestTelegramId: number;
  selectedResponseTelegramId: number;
  selectedReciver: number;
  selectedSender: number;
  selectedHour?: number;

  selectedFrom: Date = null;
  selectedTimeFrom: string = null;
  selectedTo: Date = null;
  selectedTimeTo: string = null;
  autoRefresh: boolean = true;

  @Input() units: IUnit[]
  @Input() lastHours: Number[];
  @Output() filterClick = new EventEmitter<ITelegramLogFilter>();

  constructor() {

    const todaysDate = new Date();
    this.minDate = new Date(todaysDate.getFullYear() - 5, 0, 1);
    this.maxDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      if (this.autoRefresh) {
        this.filterClick.emit(this.lastFilters);
      }
    }, 5000)
  }

  selectedHourChanged() {
    if (this.selectedHour) {
      const now = new Date();
      let fromDate = new Date(now.valueOf() - this.selectedHour * 60 * 60000)
      let toDate = new Date(now.valueOf() + 60 * 60000)
      this.selectedTo = toDate;
      this.selectedFrom = fromDate;

      this.selectedTimeTo = toDate.getHours().toString() + ':' + toDate.getMinutes().toString();
      this.selectedTimeFrom = fromDate.getHours().toString() + ':' + fromDate.getMinutes().toString();


      console.warn("this.selectedTimeTo", this.selectedTimeTo)
      console.warn("this.selectedTimeFrom", this.selectedTimeFrom)
    }
  }

  clearForm() {
    //this.selectedTelegrams = [];
    this.selectedReciver = null;
    this.selectedSender = null;
    this.selectedFrom = null;
    this.selectedTimeFrom = '';
    this.selectedTo = null;
    this.selectedTimeTo = '';
    this.selectedRequestTelegramId = null;
    this.selectedResponseTelegramId = null;
    this.selectedHour = null;
  }

  submitForm() {
    let completeDateto: Date = null;
    let completeDateFrom: Date = null;
    if (this.selectedTimeFrom) {

      console.warn("selectedTimeTo", this.selectedTimeFrom.split(':'))
      let time = this.selectedTimeFrom.split(':')
      this.selectedFrom.setHours(Number(time[0]));
      this.selectedFrom.setMinutes(Number(time[1]));
      console.warn("this.selectedTo", this.selectedFrom);
      completeDateFrom = this.selectedFrom

    }
    else if (this.selectedFrom) {
      completeDateFrom = new Date(this.selectedFrom.toString())
    }

    if (this.selectedTimeTo) {
      console.warn("selectedTimeTo", this.selectedTimeTo.split(':'))
      let time = this.selectedTimeTo.split(':')
      this.selectedTo.setHours(Number(time[0]))
      this.selectedTo.setMinutes(Number(time[1]))
      console.warn("this.selectedTo", this.selectedTo)
      completeDateto = this.selectedTo

    }
    else if (this.selectedTo) {
      completeDateto = new Date(this.selectedTo.toString().replace("00:00:00", "23:59:59"));
    }

    this.lastFilters = {
      direction: 1,
      lastLogId: 0,
      pageSize: 0,
      requestTelegramId: this.selectedRequestTelegramId,
      responseTelegramId: this.selectedResponseTelegramId,
      receiverFk: this.selectedReciver,
      senderFk: this.selectedSender,
      fromDate: completeDateFrom ? DateUtility.toApiDate(completeDateFrom) : null,
      toDate: completeDateto ? DateUtility.toApiDate(completeDateto) : null
    };

    console.warn(this.lastFilters)
    this.filterClick.emit(this.lastFilters);

  }

  getSelectedTimeFrom(selectedTimeFrom) {
    console.warn("selectedTimeFrom", selectedTimeFrom)
    this.selectedTimeFrom = selectedTimeFrom
  }
  getSelectedTimeTo(selectedTimeTo) {
    console.warn("selectedTimeTo", selectedTimeTo)
    this.selectedTimeTo = selectedTimeTo
  }

  // add(event: MatChipInputEvent, caller: string): void {
  //   const input = event.input;
  //   const value = event.value;

  //   if ((value || '').trim()) {
  //     var index
  //     if (caller == 'telegramId') {
  //       index = this.telegrams.findIndex(x => x.telegramId.toString() == value.trim());
  //     }
  //     else if (caller === 'telegramTitle') {
  //       index = this.telegrams.findIndex(x => x.name == value.trim());
  //     }
  //     if (index >= 0) {
  //       this.selectedTelegrams.push(this.telegrams[index]);
  //       this.telegrams.splice(index, 1);
  //     }
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  //   this.telegramIdCtrl.setValue(null);
  //   this.telegramTitleCtrl.setValue(null);
  // }

  // remove(telegram: ITelegram): void {
  //   const index = this.selectedTelegrams.indexOf(telegram);
  //   if (index >= 0) {
  //     this.telegrams.push(this.selectedTelegrams[index])
  //     this.selectedTelegrams.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent, caller: string): void {
  //   var index
  //   if (caller == 'telegramId') {
  //     index = this.telegrams.findIndex(x => x.telegramId.toString() === event.option.viewValue);
  //   }
  //   else if (caller === 'telegramTitle') {
  //     index = this.telegrams.findIndex(x => x.name === event.option.viewValue);
  //   }
  //   if (index >= 0) {
  //     this.selectedTelegrams.push(this.telegrams[index]);
  //     this.telegrams.splice(index, 1);
  //   }

  //   //clear input after chip selected
  //   this.telegramIdInput.nativeElement.value = '';
  //   this.telegramIdCtrl.setValue(null);
  //   this.telegramTitleInput.nativeElement.value = '';
  //   this.telegramTitleCtrl.setValue(null);
  // }

  // private _filterTelegramId(value: number): ITelegram[] {
  //   const filterValue = value;
  //   return this.telegrams.filter(x => x.telegramId.toString().indexOf(filterValue.toString()) === 0);
  // }

  // private _filterTelegramTitle(value: string): ITelegram[] {
  //   const filterValue = value.toLowerCase();
  //   return this.telegrams.filter(x => x.name.toLowerCase().indexOf(filterValue) === 0);
  // }

  // private _isNumeric(value) {
  //   return /^\d+$/.test(value);
  // }

}
