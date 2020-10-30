import { formatDate } from "@angular/common";
import * as moment from "moment";

declare var require: any;
export class IrisaDate {
  public year: number;
  public month: number;
  public day: number;
  public hour: number;
  public minute: number;
  public second: number;
  constructor(public isJalali: boolean) {
    if (isJalali) this.jalaliNow();
    else this.miladiNow();
  }
  public subtractDate(subtraction: IrisaDate) {

    const mDate1 = moment(subtraction.toString());
    const mDate2 = moment(this.toString());
    const diff = mDate2.diff(mDate1, "seconds");
    return diff;
  }
  toMiladi(): IrisaDate {
    if (this.isJalali == false) {
      throw "THIS IS NOT A JALALI DATE";
    }
    let converter = require("jalaali-js");
    let tmp = converter.toGregorian(this.year, this.month, this.day);

    let tmp1 = new IrisaDate(false);
    tmp1.year = tmp.gy;
    tmp1.month = tmp.gm;
    tmp1.day = tmp.gd;
    tmp1.hour = this.hour;
    tmp1.minute = this.minute;
    tmp1.second = this.second;
    return tmp1;
  }
  toJalali(): IrisaDate {
    if (this.isJalali == true) {
      throw "THIS IS NOT A MILADI DATE";
    }
    let converter = require("jalaali-js");


    let jD = converter.toJalaali(this.year, this.month, this.day);


    let tmp = new IrisaDate(true);
    tmp.year = jD.jy;
    tmp.month = jD.jm;
    tmp.day = jD.jd;
    tmp.hour = this.hour;
    tmp.minute = this.minute;
    tmp.second = this.second;
    return tmp;
  }
  toString(noTime: boolean = false, noSeconds: boolean = false): string {
    let tmp = this.year + "/";
    if (this.month < 10) tmp += "0";
    tmp += this.month + "/";

    if (this.day < 10) tmp += "0";
    tmp += this.day;

    if (noTime) return tmp;

    tmp += " ";
    if (this.hour < 10) tmp += "0";
    tmp += this.hour + ":";

    if (this.minute < 10) tmp += "0";

    tmp += this.minute;
    if (noSeconds) return tmp;

    tmp += ":";

    if (this.second < 10) tmp += "0";
    tmp += this.second;

    return tmp;
  }
  toApiDate(): string {
    let tmp;
    if (this.isJalali) tmp = this.toMiladi();
    else tmp = this;

    const d = new Date();
    d.setFullYear(tmp.year);
    d.setMonth(tmp.month);
    d.setDate(tmp.day);
    d.setHours(tmp.hour);
    d.setMinutes(tmp.minute);
    d.setSeconds(tmp.second);
    const dateString = moment(d).format("MM/DD/YYYY HH:mm:ss");
    return dateString;
  }
  fromStringToJalali(date: string) {


    this.fromStringToMiladi(date);




    let tmp = this.toJalali();

    console.log(tmp, this);
    console.log("______________________");


    this.year = tmp.year;
    this.month = tmp.month;
    this.day = tmp.day;
    this.hour = tmp.hour;
    this.minute = tmp.minute;
    this.second = tmp.second;
    this.isJalali = true;
  }
  fromStringToMiladi(date: string) {

    const d = new Date(date);
    console.log(d);

    this.isJalali = false;
    this.year = d.getFullYear();
    this.month = d.getMonth();
    this.day = d.getDate();
    this.hour = d.getHours();
    this.minute = d.getMinutes();
    this.second = d.getSeconds();

    console.log(this);

  }
  fromApiDateToJalali(date: string) {
    let d = new IrisaDate(false);
    d.fromApiDateToMiladi(date);
    return d.toJalali();
  }
  fromApiDateToMiladi(date: string) {
    const d = new Date(date);
    this.year = d.getFullYear();
    this.month = d.getMonth() + 1;
    this.day = d.getDate();
    this.hour = d.getHours();
    this.minute = d.getMinutes();
    this.second = d.getSeconds();
    this.isJalali = false;
  }
  dayOfWeek(): string {
    let tmp;
    if (this.isJalali) tmp = this.toMiladi();
    else tmp = this;

    const d = new Date();
    d.setFullYear(tmp.year);
    d.setMonth(tmp.month - 1);
    d.setDate(tmp.day);
    d.setHours(tmp.hour);
    d.setMinutes(tmp.minute);
    d.setSeconds(tmp.second);



    if (this.isJalali) {
      switch (d.getDay()) {
        case 0:
          return "یک شنبه";
        case 1:
          return "دوشنبه";
        case 2:
          return "سه شنبه";
        case 3:
          return "چهارشنبه";
        case 4:
          return "پنج شنبه";
        case 5:
          return "جمعه";
        case 6:
          return "شنبه";
      }
    } else {
      switch (d.getDay()) {
        case 0:
          return "Sun";
        case 1:
          return "Mon";
        case 2:
          return "Tue";
        case 3:
          return "Wed";
        case 4:
          return "Thu";
        case 5:
          return "Fri";
        case 6:
          return "Sat";
      }
    }
  }
  private jalaliNow() {
    let converter = require("jalaali-js");
    let d = new Date();
    let jD = converter.toJalaali(
      d.getFullYear(),
      d.getMonth() + 1,
      d.getDate()
    );
    this.year = jD.jy;
    this.month = jD.jm;
    this.day = jD.jd;
    this.hour = d.getHours();
    this.minute = d.getMinutes();
    this.second = d.getSeconds();
  }
  private miladiNow() {
    let d = new Date();
    this.year = d.getFullYear();
    this.month = d.getMonth() + 1;
    this.day = d.getDate();
    this.hour = d.getHours();
    this.minute = d.getMinutes();
    this.second = d.getSeconds();
  }
  public isLeapYear(): boolean {
    // tslint:disable-next-line: no-use-before-declare
    return DateUtility.isLeapYear(this.year);
  }
  public get daysInMonth(): number {
    if (this.isJalali) {
      switch (this.month) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          return 31;
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          return 30;
        case 12:
          if (this.isLeapYear()) return 30;
          else return 29;
      }
    } else {
      //TODO: implement miladi dates
    }

    return undefined;
  }
}

export class DateUtility {
  public static HoursBefore(base: Date, hours: number): Date {
    const myMoment: moment.Moment = moment(base);
    myMoment.subtract(hours, "hours");
    return myMoment.toDate();
  }
  public static HoursAfter(base: Date, hours: number): Date {
    const myMoment: moment.Moment = moment(base);
    myMoment.add(hours, "hours");
    return myMoment.toDate();
  }
  public static SubtractDate(base: Date, subtraction: Date, unit) {
    const mDate1 = moment(subtraction);
    const mDate2 = moment(base);
    const diff = mDate2.diff(mDate1, unit);
    return diff;
  }
  public static stringToJalaliDate(date: string) {
    const d = new IrisaDate(true);
    d.fromStringToJalali(date);
    return d;
  }
  public static stringToMiladiDate(date: string) {
    const d = new IrisaDate(false);
    d.fromStringToMiladi(date);
    return d;
  }
  public static fromApiDateToJalali(date: string) {
    let d = new IrisaDate(false);
    d.fromApiDateToMiladi(date);
    return d.toJalali();
  }

  public static isLeapYear(year): boolean {
    let tmp = year % 128;

    switch (tmp) {
      case 4:
      case 8:
      case 12:
      case 16:
      case 20:
      case 24:
      case 29:
      case 33:
      case 37:
      case 41:
      case 45:
      case 49:
      case 53:
      case 57:
      case 62:
      case 66:
      case 70:
      case 74:
      case 78:
      case 82:
      case 86:
      case 90:
      case 95:
      case 99:
      case 103:
      case 107:
      case 111:
      case 115:
      case 119:
      case 124:
        return true;
    }

    return false;
  }
}
