import { Component, OnInit } from '@angular/core';
import { PaneladdComponent} from '../paneladd/paneladd.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public unique_key: number | undefined;
  public parentRef: PaneladdComponent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  storeValue(value:any)
  {
    console.log(value)
  }

}
