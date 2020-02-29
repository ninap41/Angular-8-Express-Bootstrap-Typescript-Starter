import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-mongo-demo',
  templateUrl: './mongo-demo.component.html',
  styleUrls: ['./mongo-demo.component.css']
})
export class MongoDemoComponent implements OnInit {

  constructor( private _ds: DataService) { }

  ngOnInit() {
  }

}
