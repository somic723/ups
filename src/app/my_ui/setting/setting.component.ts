import { Component,ViewEncapsulation, OnInit,ViewChild  } from '@angular/core';
import { CircleProgressComponent, CircleProgressOptions } from 'ng-circle-progress';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  
  @ViewChild('circleProgress') circleProgress: CircleProgressComponent;

  options = new CircleProgressOptions();

 
  optionsA = {
    percent: 85,
    radius: 60,
    showBackground: false,
    outerStrokeWidth: 10,
    innerStrokeWidth: 5,
    subtitleFormat: false,  // clear subtitleFormat coming from other options, because Angular does not assign if variable is undefined. 
    startFromZero: false,
  }

  optionsB = {
    percent: 50,
    maxPercent: 200,
    radius: 60,
    showSubtitle: false,
    showInnerStroke: false,
    outerStrokeWidth: 5,
    outerStrokeColor: '#FFFFFF',
    innerStrokeColor: '#FFFFFF',
    backgroundColor: '#FDB900',
    backgroundStrokeWidth: 0,
    backgroundPadding: 5,
    titleColor: '#483500',
    units: ' Point',
    unitsColor: '#483500',
    subtitleColor: '#483500',
    subtitleFormat: false,  // clear subtitleFormat coming from other options, because Angular does not assign if variable is undefined. 
    startFromZero: false,
  }

  optionsC = {
    percent: 99.99,
    radius: 60,
    outerStrokeWidth: 10,
    innerStrokeWidth: 1,
    backgroundColor: '#F1F1F1',
    backgroundPadding: -18,
    backgroundStrokeWidth: 0,
    innerStrokeColor: '#32CD32',
    outerStrokeColor: '#FF6347',
    toFixed: 2,
    subtitleFormat: false,  // clear subtitleFormat coming from other options, because Angular does not assign if variable is undefined. 
    startFromZero: false,
  }

  optionsD = {
    percent: 101,
    maxPercent: 100,
    radius: 60,
    showInnerStroke: false,
    outerStrokeWidth: 10,
    innerStrokeWidth: 0,
    backgroundPadding: -10,
    backgroundStrokeWidth: 0,
    outerStrokeColor: '#61A9DC',
    backgroundColor: '#ffffff',
    backgroundGradientStopColor: '#c0c0c0',
    backgroundGradient: true,
    subtitleColor: '#444444',
    startFromZero: false,
    subtitleFormat: (percent: number): string => {
      if (percent >= 100) {
        return "Congratulations!"
      } else {
        return "Progress"
      }
    }
  }

  optionsE = {
    percent: 75,
    radius: 60,
    outerStrokeWidth: 10,
    innerStrokeWidth: 10,
    space: -10,
    outerStrokeColor: "#4882c2",
    innerStrokeColor: "#e7e8ea",
    showBackground: false,
    title: 'UI',
    animateTitle: false,
    showUnits: false,
    clockwise: false,
    animationDuration: 1000,
    startFromZero: false,
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: '#53a9ff',
    lazy: true,
    subtitleFormat: (percent: number): string => {
      return `${percent}%`;
    }
  }

  optionsF = {
    percent: 60,
    radius: 60,
    backgroundPadding: 7,
    outerStrokeWidth: 2,
    innerStrokeWidth: 2,
    space: -2,
    outerStrokeColor: "#808080",
    innerStrokeColor: "#e7e8ea",
    showBackground: true,
    title: ['working', 'in', 'progress'],
    titleFontSize: 12,
    subtitleFontSize: 20,
    animateTitle: false,
    showUnits: false,
    clockwise: false,
    animationDuration: 1000,
    subtitleFormat: (percent: number): string => {
      return `${percent}%`;
    }
  }

  optionsG = {
    percent: 75,
    radius: 60,
    outerStrokeWidth: 5,
    innerStrokeWidth: 5,
    space: -5,
    outerStrokeColor: "#76C2AF",
    innerStrokeColor: "#ffffff",
    showBackground: false,
    showImage: true,
    imageSrc: "assets/images/music.svg",
    imageHeight: 105,
    imageWidth: 105,
  }

  constructor() {
  }


  ngOnInit(): void {
  }

}
