import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsService } from '../services/tabs.service';
import { Cargo, Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
    edad: [, [Validators.required, Validators.min(0)]],
    fechaIngreso: [, [Validators.required]],
    cargo: [, [Validators.required]],
  });

  cargos: Cargo[] = [];

  // Constructor
  constructor(private fb: FormBuilder, private tabsService: TabsService) {}

  ngOnInit(): void {
    this.tabsService.getCargos().subscribe((cargos) => (this.cargos = cargos));
  }

  // Metodos
  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    let { nombre, edad, fechaIngreso, cargo } = this.miFormulario.value;

    let usuario = new Usuario();
    let cargose = new Cargo();
    
    cargose.uuid = cargo;
    usuario.nombre = nombre;
    usuario.edad = edad;
    usuario.fechaIngreso = `${fechaIngreso}T00:00`;
    usuario.cargo = cargose;

    this.tabsService
      .createUsuario(usuario)
      .subscribe((ok) => {
        console.log('se creo');
      });

    this.miFormulario.reset();
  }

  campoEsValido(campo: string): boolean | null {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
}
