import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PrincipalComponent} from "./dashboard-components/principal/principal.component";
import { ResumenComponent} from  "./dashboard-components/resumen/resumen.component";


const routes: Routes = [
  {
    path:"dashboard",
    component:PrincipalComponent,
    children:[
      {path:"", component:ResumenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule {}
