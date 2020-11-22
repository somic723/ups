import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-bypass',
  templateUrl: './bypass.component.html',
  styleUrls: ['./bypass.component.css']
})
export class BypassComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['Freq(Hz)', 'Volt(V)', 'Curr(A)', 'Power(W)'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Color[] = [
    {
      borderColor: 'rgb(199, 62, 29,0.5)',
      backgroundColor: 'rgb(246, 174, 45,1)',
    },
  ];

  public barChartData: ChartDataSets[] = [
    { data: [25, 180, 281, 156], label: '192.168.1.1' },
    { data: [30, 180, 281, 156], label: '192.168.1.2' }

  ];

  constructor() { }

  ngOnInit() {
  }

}
