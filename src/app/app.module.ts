import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./app-components/login/login.component";
import { PageNotFoundComponent } from "./app-components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, PageNotFoundComponent],
  imports: [BrowserModule, TooltipModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
