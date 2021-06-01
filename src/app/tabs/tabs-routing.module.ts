import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoComponent } from './cargo/cargo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MercanciaComponent } from './mercancia/mercancia.component';
import { MercanciaEditarComponent } from './mercancia-editar/mercancia-editar.component';
import { MercanciaEliminarComponent } from './mercancia-eliminar/mercancia-eliminar.component';
import { MercanciaListarComponent } from './mercancia-listar/mercancia-listar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'cargo', component: CargoComponent},
      {path: 'usuario', component: UsuarioComponent},
      {path: 'mercancia', component: MercanciaComponent},
      {path: 'mercancia-editar', component: MercanciaEditarComponent},
      {path: 'mercancia-eliminar', component: MercanciaEliminarComponent},
      {path: 'mercancia-listar', component: MercanciaListarComponent},
      {path: '**', redirectTo: 'cargo'}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
