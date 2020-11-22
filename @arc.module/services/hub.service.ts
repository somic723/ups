import { SettingsService } from './settings.service';
import { Telegram } from './../models/classes/telegram.class';
import { Injectable } from "@angular/core";
import * as signalR from "@aspnet/signalr";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class HubService {

  private hubConnection: signalR.HubConnection;
  private _interval;
  latestEvent = new Subject<Telegram>();
  lastArcEvent: Subject<any> = new Subject<any>();
  private initialized = false;
  constructor(
    public settings: SettingsService,
    private http: HttpClient
  ) { }



  stop() {
    clearInterval(this._interval);
    this.hubConnection = null;
    this.initialized = false;

  }

  public start = async () => {
    if (this.initialized)
      return;
    if (!this.hubConnection) {
      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(this.settings.serverAddress + "/irisaHub")
        .build();

    }
    this.addListener();
    this.addArcListener();
    this._interval = setInterval(() => this.connectionCheck(), 5000);
    this.initialized = true;
    console.log("H_START");

  };
  private async connectionCheck() {

    if (!this.hubConnection) {

      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(this.settings.serverAddress + "/irisaHub")
        .build();
    }
    if (this.hubConnection.state === 0) {
      console.log("RECONNECTING TO HUB");

      this.hubConnection
        .start()
        .then(() => {
          console.log("Connection started");
        })
        .catch(err => {
          console.log("Error while starting connection: " + err);
        });
    }
  }

  private addListener = () => {
    this.hubConnection.on("NEW_EVENT", data => {
      const tmp = JSON.parse(data);

      this.latestEvent.next(tmp);
    });
    this.hubConnection.onclose(() => {
      console.log("DISCONNECTED!!!");

      //  this.globals.LastRoute=this.router.url;
      //  this.router.navigate(["/login"]);
      this.lastArcEvent.next({ title: "DISCONNECTED" });
    });
  };

  private addArcListener = () => {
    this.hubConnection.on("ARC_EVENT", data => {
      this.lastArcEvent.next(data);
    });
  };
}
