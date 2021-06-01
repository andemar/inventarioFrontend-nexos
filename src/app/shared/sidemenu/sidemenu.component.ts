import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidemenuComponent {

  tabsMenu: MenuItem[] = [
    {
      texto: 'Cargo',
      ruta: 'tabs/cargo',
    },
    {
      texto: 'Usuario',
      ruta: 'tabs/usuario',
    },
    {
      texto: 'Mercancia',
      ruta: 'tabs/mercancia',
    },
    {
      texto: 'Mercancia editar',
      ruta: 'tabs/mercancia-editar',
    },
    {
      texto: 'Mercancia eliminar',
      ruta: 'tabs/mercancia-eliminar',
    },
    {
      texto: 'Mercancia listar',
      ruta: 'tabs/mercancia-listar',
    },
  ];

}
