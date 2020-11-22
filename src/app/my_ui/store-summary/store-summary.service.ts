import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreSummary } from './store-summary';

@Injectable({
  providedIn: 'root'
})


export class StoreSummaryService {

  getStoreSummary(): Observable<StoreSummary[]> {
    return of([

      { UPSName:"192.168.1.1", Manufacture: "9465", SerialNumber: "true", Model: "primary",SoftwareVersion: "0.5383", AgentVersion: "payments", ComPortVesion: "true",UpsAttachedDevice:"",upscode:"",ISActive:true,HostName:"",OperatingSystem:"",FirmwareVersion:"",FirmwareDt:"",SystemUpTime:"",MacAddress:"",IPAddress:"",SubNetMask:"",DefaultGateWay:""},
      { UPSName:"192.168.1.2", Manufacture: "9465", SerialNumber: "true", Model: "primary",SoftwareVersion: "0.5383", AgentVersion: "payments", ComPortVesion: "true",UpsAttachedDevice:"",upscode:"",ISActive:true,HostName:"",OperatingSystem:"",FirmwareVersion:"",FirmwareDt:"",SystemUpTime:"",MacAddress:"",IPAddress:"",SubNetMask:"",DefaultGateWay:""}


    ]);
  }

  constructor() { }
}
