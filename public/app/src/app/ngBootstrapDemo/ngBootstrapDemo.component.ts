import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
@Component({
  selector: "app-ngBootstrapDemo",
  templateUrl: "./ngBootstrapDemo.html",
  styleUrls: ["./ngBootstrapDemo.css"]
})
export class NgBootstrapDemoComponent implements OnInit {
  constructor(public _ds: DataService) {}

  ngOnInit() {
    this._ds.getAllData("data"); // retrieves some serverside data
    this._ds.getAllData("user"); // retrieves some serverside data
  }
}
