import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Mercancia, Usuario, MercanciaUsuarioDto, MercanciaPage } from '../interfaces/interfaces';
import { Cargo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  // Atributos
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // Servicios de cargo
  createCargo(titulo: string) {
    const url = `${this.baseUrl}/cargos`;

    const body = { titulo };

    return this.http.post<Cargo>(url, body);
  }

  getCargos() {
    const url = `${this.baseUrl}/cargos`;
    return this.http.get<Cargo[]>(url);
  }

  // Servicios de usuario

  createUsuario(usuario: Usuario) {
    const url = `${this.baseUrl}/usuarios`;

    return this.http.post<Usuario>(url, usuario);
  }

  getUsuarios() {
    const url = `${this.baseUrl}/usuarios`;
    return this.http.get<Usuario[]>(url);
  }

  // Mercancia

  createMercancia(dto: MercanciaUsuarioDto) {
    const url = `${this.baseUrl}/mercancias`;

    return this.http.post<Mercancia>(url, dto);
  }
  
  updateMercancia(dto: MercanciaUsuarioDto) {
    const url = `${this.baseUrl}/mercancias`;
  
    return this.http.put<Mercancia>(url, dto);
  }

  deleteMercancia(mercancia: string, usuario: string) {
    const url = `${this.baseUrl}/mercancias/${mercancia}/${usuario}`;
  
    return this.http.delete<Mercancia>(url);
  }

  getMercancias() {
    const url = `${this.baseUrl}/mercancias`;

    return this.http.get<MercanciaPage>(url);
  }

  getMercanciasOrden(orden: string) {
  
    let url = `${this.baseUrl}/mercancias`;
    let sort = '?sort=';
    
    
    switch (orden) {
      case '1':
        //fecha
        sort = `${sort}fechaIngreso`;
        break;
      
      case '2':
        // nombre usuario
        sort = `${sort}usuario.nombre`;
        break;
      case '3':
        // nombre producto
        sort = `${sort}nombreProducto`;
        break;
      case '4':
        // fecha y nombre producto
        sort = `${sort}fechaIngreso,nombreProducto`;
        break;
      default:
        sort = '';
        break;
    }
  
    return this.http.get<MercanciaPage>(`${url}${sort}`);

  }
}
