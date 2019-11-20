import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardModuleRoutingModule } from "./dashboard-module-routing.module";
import { PrincipalComponent } from "./dashboard-components/principal/principal.component";
import { EmpleadosComponent } from "./dashboard-components/empleados/empleados.component";
import { TicketsComponent } from "./dashboard-components/tickets/tickets.component";
import { ProductosComponent } from "./dashboard-components/productos/productos.component";
import { ResumenComponent } from './dashboard-components/resumen/resumen.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    EmpleadosComponent,
    TicketsComponent,
    ProductosComponent,
    ResumenComponent,
  ],
  imports: [CommonModule, DashboardModuleRoutingModule]
})
export class DashboardModuleModule {}
