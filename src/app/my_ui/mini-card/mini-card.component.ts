import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})

export class MiniCardComponent {
  @Input() UPSName: string;
  @Input() Manufacture: string;
  @Input() SerialNumber: string;
  @Input() Model: string;
  @Input() SoftwareVersion: string;
  @Input() AgentVersion: string;
  @Input() ComPortVesion: string;
  @Input() UpsAttachedDevice: string;
  @Input() upscode: string;
  @Input() ISActive: boolean;
  @Input() HostName: string;
  @Input() OperatingSystem: string;
  @Input() FirmwareVersion: string;
  @Input() FirmwareDt: string;
  @Input() SystemUpTime: string;
  @Input() MacAddress: string;
  @Input() IPAddress: string;
  @Input() SubNetMask: string;
  @Input() DefaultGateWay: string;
  

  constructor() { }
}
