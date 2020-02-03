import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {
  private data: any[] = [
    {
      "name": "США",
      "value": 894
    },
    {
      "name": "Германия",
      "value": 500
    },
    {
      "name": "Китай",
      "value": 720
    },
    {
      "name": "Россия",
      "value": 620
    },
    {
      "name": "Франция",
      "value": 100
    }
  ];
  getData(): any[] {
    return this.data;
  }
  addData(countryName: string, countryValue: number) {
    if (
      countryName === null ||
      countryValue === null
    ) { return; }
    if (
      this.data.map(elem => elem.name).includes(countryName)
    ) {
      this.data = this.data.filter(elem => elem.name !== countryName);
    }
    this.data.push({name: countryName, value: countryValue});
  }
  delete(countryName: string) {
    this.data = this.data.filter(elem => elem.name !== countryName);
  }
  clear() {
    this.data = [];
  }
  constructor() { }
}
