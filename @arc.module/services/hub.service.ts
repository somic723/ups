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

  lastIndex = new Subject<Telegram>();
  lastArcEvent: Subject<any> = new Subject<any>();
  private initialized = false;
  constructor(
    public settings: SettingsService,
    private http: HttpClient
  ) { }
  public startConnection = async () => {
    if (this.initialized)
      return;
    this.addListener();
    this.addArcListener();
    if (!this.hubConnection) {
      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(this.settings.serverAddress + "/irisaHub")
        .build();

    }
    setInterval(() => this.connectionCheck(), 5000);
    this.initialized = true;
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
      console.log(tmp);
      this.lastIndex.next(tmp);
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
