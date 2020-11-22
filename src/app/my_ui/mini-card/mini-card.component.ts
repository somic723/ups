import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})



  


export class MiniCardComponent {

  @Input() estimatedChargeRemain: number;
  @Input() estimatedMinutesRemain: number;
  @Input() secondsOnBattery: number;
  @Input() tempC: number;
  @Input() upsCode: number;
  @Input() voltV: number;
  @Input() currA: number;
  @Input() dateTime: string;
  @Input() upsIpAddress: string;
  @Input() status: string;

  

  constructor() { }
}
