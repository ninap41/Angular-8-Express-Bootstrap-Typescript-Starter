import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import { NgBootstrapDemoComponent } from "./ngBootstrapDemo/ngBootstrapDemo.component";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalBasic } from "./modal-basic/modal-basic.component";
import { DataService } from "./data.service";
import { DataDemoComponent } from './data-demo/data-demo.component';
import { MongoDemoComponent } from './mongo-demo/mongo-demo.component';

@NgModule({
  declarations: [AppComponent, NgBootstrapDemoComponent, NgbdModalBasic, DataDemoComponent, MongoDemoComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
