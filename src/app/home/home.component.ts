import { Component, OnInit } from '@angular/core';
import {ChartsDataService} from '../charts-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // changes = [];
  single = [];
  constructor(private dataService: ChartsDataService) {}

  alert(message: string) {
    alert(message);
  }
  addData(name: string, value: number) {
    this.dataService.addData(name, value);
  }
  cmd(command: string) {
    const correctCommand = command
      .split('')
      .filter(char => char !== ',' && char !== ';')
      .join('');
    let [countryName, countryValue] = correctCommand
      .split(' ')
      .filter(word => word !== 'name:' && word !== 'value:');
    // console.log(countryName);
    // console.log(countryValue);
    this.addData(countryName, Number(countryValue));
  }
  ngOnInit() {
    this.single = this.dataService.getData();
  }
}
