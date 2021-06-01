import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsService } from '../services/tabs.service';
import { Cargo } from '../interfaces/interfaces';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styles: [],
})
export class CargoComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    titulo: [, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private tabsService: TabsService) {}

  ngOnInit(): void {}

  // Metodos
  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    let { titulo } = this.miFormulario.value;

    this.tabsService.createCargo(titulo).subscribe((ok) => {
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
