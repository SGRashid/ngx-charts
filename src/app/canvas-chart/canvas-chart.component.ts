import { Component, OnInit } from '@angular/core';
import { single } from '../data/data';
import { colors } from '../data/colors';
import { ChartsDataService } from '../charts-data.service';

@Component({
  selector: 'app-canvas-chart',
  templateUrl: './canvas-chart.component.html',
  styleUrls: ['./canvas-chart.component.css']
})
export class CanvasChartComponent implements OnInit {

  single: string[];
  colorScheme = colors;
  constructor(
    private dataService: ChartsDataService
  ) {
    // Object.assign(this, { single });
  }

  createBar = (elem: any, num: number = 1, color: string, length: number) => {
    const ident: number = 30 * num;
    elem.fillStyle = color;
    elem.fillRect(0, ident, length, 20);
  };

  canvasInit(list: any, colorList: string[]) {

    const chart = document.getElementById('chart');
    chart.width = 500;
    chart.height = 50 * list.length;
    const ctx = chart.getContext('2d');

    // const createBar = (elem: any, num: number = 1, color: string, length: number) => {
    //   const ident: number = 30 * num;
    //   elem.fillStyle = color;
    //   elem.fillRect(0, ident, length, 20);
    // };

    const maxValue = list
      .map(elem => elem.value)
      .sort()
      .reverse()[0];

    for (let i = 0; i < list.length; i ++) {
      const color = colorList[i];
      const barLength = 400 * (list[i].value / maxValue);
      this.createBar(ctx, i + 1, color, barLength);
    }
  }
  ngOnInit() {
    this.single = this.dataService.getData();
    this.canvasInit(this.single, this.colorScheme);
  }

}
