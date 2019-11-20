import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PrincipalComponent } from "./dashboard-components/principal/principal.component";
import { ResumenComponent } from "./dashboard-components/resumen/resumen.component";
import { TiendasComponent } from "./dashboard-components/tiendas/tiendas.component";
import { TicketsComponent } from "./dashboard-components/tickets/tickets.component";
import { ProductosComponent } from "./dashboard-components/productos/productos.component";
import { EmpleadosComponent } from "./dashboard-components/empleados/empleados.component";
import { EmpresaComponent } from "./dashboard-components/empresa/empresa.component";
import { AyudaComponent } from "./dashboard-components/ayuda/ayuda.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: PrincipalComponent,
    children: [
      { path: "", component: ResumenComponent },
      { path: "tiendas", component: TiendasComponent },
      { path: "tickets", component: TicketsComponent },
      { path: "productos", component: ProductosComponent },
      { path: "empleados", component: EmpleadosComponent },
      { path: "empresa", component: EmpresaComponent },
      { path: "ayuda", component:AyudaComponent},
      { path: "dashboard", redirectTo: "" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule {}
