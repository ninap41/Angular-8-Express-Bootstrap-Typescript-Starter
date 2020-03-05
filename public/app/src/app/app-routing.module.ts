import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgBootstrapDemoComponent } from "./ngBootstrapDemo/ngBootstrapDemo.component";
import { DataDemoComponent } from "./data-demo/data-demo.component";
import { MongoDemoComponent } from "./mongo-demo/mongo-demo.component";
import { EngineComponent } from "./engine/engine.component";
import { GameTestComponent } from "./game-test/game-test.component";

const routes: Routes = [
  { path: "", component: NgBootstrapDemoComponent, pathMatch: "full" },
  { path: "dataDemo", component: DataDemoComponent, pathMatch: "full" },
  { path: "engineDemo", component: EngineComponent, pathMatch: "full" },
  { path: "gameTest", component: GameTestComponent, pathMatch: "full" },

  { path: "mongoDemo", component: MongoDemoComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
