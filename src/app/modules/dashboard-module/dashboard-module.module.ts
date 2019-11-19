import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardModuleRoutingModule } from "./dashboard-module-routing.module";
import { DefaultComponent } from "./dashboard-components/default/default.component";
import { EmpleadosComponent } from "./dashboard-components/empleados/empleados.component";
import { TicketsComponent } from "./dashboard-components/tickets/tickets.component";
import { ProductosComponent } from "./dashboard-components/productos/productos.component";

@NgModule({
  declarations: [
    DefaultComponent,
    EmpleadosComponent,
    TicketsComponent,
    ProductosComponent
  ],
  imports: [CommonModule, DashboardModuleRoutingModule]
})
export class DashboardModuleModule {}
