import { Injectable } from "@angular/core";
import level_1 from "./json/data.json";
import The_House from "./json/map.json";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GameService {
  level: object;
  map: object;
  StartingPoint: any;
  constructor() {
    this.level = level_1;
    this.map = The_House;
    this.StartingPoint = {
      currentLevel: "level_1",
      current_room: "the closet",
      name: "Sally",
      bag: ["thing"]
    };
  }
}
