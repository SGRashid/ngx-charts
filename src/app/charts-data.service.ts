import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {
  private data: any[] = [
    {
      "name": "США",
      "value": 8940000
    },
    {
      "name": "Германия",
      "value": 5000000
    },
    {
      "name": "Китай",
      "value": 7200000
    },
    {
      "name": "Россия",
      "value": 6200000
    },
    {
      "name": "Франция",
      "value": 1000000
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
  constructor() { }
}
