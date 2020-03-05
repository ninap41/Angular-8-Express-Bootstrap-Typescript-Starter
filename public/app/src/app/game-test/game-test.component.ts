import { Component, OnInit } from "@angular/core";
import { GameService } from "./game.service";
@Component({
  selector: "app-game-test",
  templateUrl: "./game-test.component.html",
  styleUrls: ["./game-test.component.css"]
})
export class GameTestComponent implements OnInit {
  constructor(public _gs: GameService) {}

  ngOnInit() {}
}
