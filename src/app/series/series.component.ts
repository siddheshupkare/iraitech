import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent
{

  constructor() { }

  numArr=[2,3,10,15,26,35,50,63]
  newvalue!: Number;

  findNum(data: any)
  {
    this.newvalue=this.numArr[data]

    console.log(this.newvalue)
  }
}
