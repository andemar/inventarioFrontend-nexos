export class Cargo {
  uuid: string;
  titulo: string;
}

export class Usuario {
  uuid: string;
  nombre: string;
  edad: number;
  cargo: Cargo;
  fechaIngreso: string;
}

export class Mercancia {
  uuid: string;
  nombreProducto: string;
  cantidad: number;
  fechaIngreso: string;
  usuario: Usuario;
  usuarioModificacion: Usuario;
  fechaModificacion: string;
}

export class MercanciaUsuarioDto {
  mercancia: Mercancia;
  usuario: Usuario;
}

export class MercanciaPage {
  content:          Mercancia[];
  pageable:         Pageable;
  totalElements:    number;
  totalPages:       number;
  last:             boolean;
  size:             number;
  number:           number;
  sort:             Sort;
  numberOfElements: number;
  first:            boolean;
  empty:            boolean;
}

class Pageable {
  sort:       Sort;
  offset:     number;
  pageNumber: number;
  pageSize:   number;
  paged:      boolean;
  unpaged:    boolean;
}

class Sort {
  sorted:   boolean;
  unsorted: boolean;
  empty:    boolean;
}