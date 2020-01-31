import { Component, OnInit } from '@angular/core';
import {ChartsDataService} from '../charts-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: ChartsDataService) { }

  alert(message: any, message2: any) {
    alert(`Название: ${message}\nЗначение: ${message2}`);
  }
  addData(name: string, value: number) {
    this.dataService.addData(name, value);
    // alert(`Название: ${name}\nЗначение: ${value}`);
  }
  ngOnInit() {
  }

}
