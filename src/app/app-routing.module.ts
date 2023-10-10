import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VentasComponent} from "./principal/ventas/ventas.component";

const routes: Routes=[
  {
    path: '',
    redirectTo: 'ventas',
    pathMatch: 'full'
  },
  {
    path: 'ventas', component: VentasComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
