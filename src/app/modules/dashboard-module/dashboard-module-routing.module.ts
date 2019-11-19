import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DefaultComponent} from "./dashboard-components/default/default.component";


const routes: Routes = [
  {
    path:"dashboard",
    component:DefaultComponent,
    children:[
      {path:"", component:DefaultComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule {}
