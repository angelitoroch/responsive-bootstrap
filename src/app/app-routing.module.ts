import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './app-components/login/login.component'
import { PageNotFoundComponent} from  './app-components/page-not-found/page-not-found.component'

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
