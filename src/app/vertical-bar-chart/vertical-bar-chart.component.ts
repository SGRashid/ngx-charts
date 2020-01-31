import { Component, OnInit } from '@angular/core';
import { single } from '../data/data';
import { colors } from '../data/colors';
import {ChartsDataService} from '../charts-data.service';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit {
  single: any[];
  multi: any[];
  colors: string[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: colors
    // domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', 'DeepSkyBlue']
  };

  constructor(
    private dataService: ChartsDataService
  ) {
    // Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
    this.single = this.dataService.getData();
  }
}
