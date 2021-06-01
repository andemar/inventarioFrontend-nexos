import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario, Mercancia, MercanciaUsuarioDto } from '../interfaces/interfaces';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styles: [],
})
export class MercanciaComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    nombreProducto: [, [Validators.required]],
    cantidad: [, [Validators.required, Validators.min(0)]],
    fechaIngreso: [, [Validators.required]],
    usuario: [, [Validators.required]],
  });

  usuarios: Usuario[] = [];

  // Constructor
  constructor(private fb: FormBuilder, private tabsService: TabsService) {}

  ngOnInit(): void {
    this.tabsService.getUsuarios().subscribe((usuarios) => this.usuarios = usuarios);
  }

  // Metodos

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    let {nombreProducto, cantidad, fechaIngreso, usuario} = this.miFormulario.value;
    
    let mercancia = new Mercancia();
    let usuariosel = new Usuario();
    let dto = new MercanciaUsuarioDto();

    usuariosel.uuid = usuario;

    mercancia.nombreProducto = nombreProducto;
    mercancia.cantidad = cantidad;
    mercancia.fechaIngreso = `${fechaIngreso}T00:00`;

    dto.mercancia = mercancia;
    dto.usuario = usuariosel;
    
    this.tabsService
      .createMercancia(dto)
      .subscribe((ok) => {
        console.log('Se creo');
        this.miFormulario.reset();
      });
  }
}
