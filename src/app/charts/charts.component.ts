import {Component, NgModule, OnInit, Input} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsDataService } from '../charts-data.service';
import { colors } from '../data/colors';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() changes: any;

  single: any[];
  view: any[]=[700, 400];
  colors: string[];

  //options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = "below";

  colorScheme = {
    domain: colors
  };


  constructor(
    private dataService: ChartsDataService
  ) {}

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
    this.single = this.dataService.getData();
  }
}
