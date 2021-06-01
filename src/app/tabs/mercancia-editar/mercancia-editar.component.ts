import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsService } from '../services/tabs.service';
import { Mercancia, MercanciaUsuarioDto, Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-mercancia-editar',
  templateUrl: './mercancia-editar.component.html',
  styles: [],
})
export class MercanciaEditarComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    mercancia: [, [Validators.required]],
    nombreProducto: [, [Validators.required]],
    cantidad: [, [Validators.required, Validators.min(0)]],
    fechaIngreso: [, [Validators.required]],
    usuarioModificacion: [, [Validators.required]],
  });
  
  mercancias: Mercancia[] = [];
  usuarios: Usuario[] = [];

  constructor(private fb: FormBuilder, private tabsService: TabsService) {}

  ngOnInit(): void {
    this.tabsService
      .getUsuarios()
      .subscribe((usuarios) => (this.usuarios = usuarios));

    this.tabsService
      .getMercancias()
      .subscribe((mercanciasPage) => (this.mercancias = mercanciasPage.content));
  }

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    let {mercancia, nombreProducto, cantidad, fechaIngreso, usuarioModificacion} = this.miFormulario.value;
    let mercanciasel = new Mercancia();
    let usuario = new Usuario();
    let dto = new MercanciaUsuarioDto();

    usuario.uuid = usuarioModificacion;
    mercanciasel.uuid = mercancia;
    mercanciasel.nombreProducto = nombreProducto;
    mercanciasel.cantidad = cantidad;
    mercanciasel.fechaIngreso = `${fechaIngreso}T00:00`;
    
    dto.mercancia = mercanciasel;
    dto.usuario = usuario;

    this.tabsService.updateMercancia(dto)
      .subscribe((ok) => {
        console.log('Se actualizo');
        this.miFormulario.reset();
      })

  }
}
