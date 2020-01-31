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
    this.ngOnInit();
  }
  cmd(command: string) {
    if (
      command === 'delete all' ||
      command === 'del all'
    ) {
      this.clear();
      return;
    }
    const correctCommand = command
      .split('')
      .filter(char => char !== ',' && char !== ';')
      .join('');
    let [countryName, countryValue] = correctCommand
      .split(' ')
      .filter(word => word !== 'name:' && word !== 'value:');
    // console.log(countryName);
    // console.log(countryValue);
    if (
      countryName === 'delete' ||
      countryName === 'del'
    ) {
      this.delete(countryValue);
      return;
    }
    this.addData(countryName, Number(countryValue));
  }
  delete(name: string) {
    this.dataService.delete(name);
    this.ngOnInit();
  }
  clear(){
    this.dataService.clear();
    this.ngOnInit();
  }
  ngOnInit() {
    this.single = this.dataService.getData();
  }
}
