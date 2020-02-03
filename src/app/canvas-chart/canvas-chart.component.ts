import { Component, OnInit } from '@angular/core';
import { single } from '../data/data';
import { colors } from '../data/colors';

@Component({
  selector: 'app-canvas-chart',
  templateUrl: './canvas-chart.component.html',
  styleUrls: ['./canvas-chart.component.css']
})
export class CanvasChartComponent implements OnInit {

  single: string[];
  colorScheme = {
    domain: colors
  }
  constructor() {
    Object.assign(this, { single })
  }
  canvasInit(list: any, colorList: string[]) {
    const chart = document.getElementById('chart');
    chart.width = 500;
    chart.height = 500;
    const ctx = chart.getContext('2d');
    // ctx.fillStyle = 'red';
    // ctx.fillRect(0, 0, 100, 100);

    const createBar = (elem: any, num: number = 1, color: string, length: number) => {
      const ident: number = 30 * num;
      elem.fillStyle = color;
      elem.fillRect(0, ident, length, 20);
    };

    const maxValue = list
      .map(elem => elem.value)
      .sort()
      .reverse()[0];

    for (let i = 0; i < list.length; i ++) {
      const barLength = 400 * (list[i].value / maxValue);
      createBar(ctx, i + 1, 'orange', barLength);
    }
  }
  ngOnInit() {
    this.canvasInit(this.single, this.colorScheme);
  }

}
