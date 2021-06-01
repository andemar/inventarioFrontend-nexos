import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Mercancia } from '../interfaces/interfaces';
import { TabsService } from '../services/tabs.service';

interface orden {
  titulo: string;
  id: string;
}

@Component({
  selector: 'app-mercancia-listar',
  templateUrl: './mercancia-listar.component.html',
  styles: [],
})
export class MercanciaListarComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    orden: [, [Validators.required]],
  });

  ordenes: orden[] = [
    {
      titulo: 'Ordenar por fecha',
      id: '1',
    },
    {
      titulo: 'Ordenar por nombre de usuario',
      id: '2',
    },
    {
      titulo: 'Ordenar por nombre del producto',
      id: '3',
    },
    {
      titulo: 'Ordenar por fecha y nombre del producto',
      id: '4',
    },
  ];
  
  mercancias: Mercancia[] = [];

  // Constructor
  constructor(private fb: FormBuilder, private tabsService: TabsService) {}

  ngOnInit(): void {
    this.tabsService
      .getMercancias()
      .subscribe((mercanciasPage) => {
        this.mercancias = mercanciasPage.content;
        console.log(this.mercancias);
      });

    this.miFormulario
      .get('orden')
      ?.valueChanges.pipe(
        switchMap((orden) => this.tabsService.getMercanciasOrden(orden))
      )
      .subscribe((mercancias) => {
        this.mercancias = mercancias.content;
        console.log(this.mercancias);
      })
  }

  // Metodos
  listar() {
    
  }
}
