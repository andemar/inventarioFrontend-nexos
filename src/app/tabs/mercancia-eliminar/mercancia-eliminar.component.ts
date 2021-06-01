import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mercancia, Usuario, MercanciaUsuarioDto } from '../interfaces/interfaces';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-mercancia-eliminar',
  templateUrl: './mercancia-eliminar.component.html',
  styles: [],
})
export class MercanciaEliminarComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    mercancia: [, [Validators.required]],
    usuario: [, [Validators.required]],
  });

  mercancias: Mercancia[] = [];
  usuarios: Usuario[] = [];

  // Constructor
  constructor(private fb: FormBuilder, private tabsService: TabsService) {}

  ngOnInit(): void {
    this.getData();
  }

  // Metodos
  eliminar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    let {mercancia, usuario} = this.miFormulario.value;

    this.tabsService.deleteMercancia(mercancia, usuario)
      .subscribe((ok) => {
        console.log('Se elimino');
        this.getData();
        this.miFormulario.reset();
      })
  }


  getData() {
    this.tabsService
      .getUsuarios()
      .subscribe((usuarios) => (this.usuarios = usuarios));

    this.tabsService
      .getMercancias()
      .subscribe(
        (mercanciasPage) => (this.mercancias = mercanciasPage.content)
      );
  }
}
