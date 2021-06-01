import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { CargoComponent } from './cargo/cargo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MercanciaComponent } from './mercancia/mercancia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MercanciaEliminarComponent } from './mercancia-eliminar/mercancia-eliminar.component';
import { MercanciaListarComponent } from './mercancia-listar/mercancia-listar.component';
import { MercanciaEditarComponent } from './mercancia-editar/mercancia-editar.component';


@NgModule({
  declarations: [
    CargoComponent,
    UsuarioComponent,
    MercanciaComponent,
    MercanciaEliminarComponent,
    MercanciaListarComponent,
    MercanciaEditarComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TabsModule { }
