import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  private datosCompra: any;

  setDatosCompra(datos: any) {
    this.datosCompra = datos;
  }

  getDatosCompra() {
    return this.datosCompra;
  }
}
