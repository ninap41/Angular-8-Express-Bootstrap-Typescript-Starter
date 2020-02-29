import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-data-demo',
  templateUrl: './data-demo.component.html',
  styleUrls: ['./data-demo.component.css']
})
export class DataDemoComponent implements OnInit {
userData: any;
data: any
  constructor( private _ds: DataService) { }

  ngOnInit() {
    this.userData = this._ds.getAllData("data"); // retrieves some serverside data
    this. data = this._ds.getAllData("user"); // retrieves some serverside data
  }

}
