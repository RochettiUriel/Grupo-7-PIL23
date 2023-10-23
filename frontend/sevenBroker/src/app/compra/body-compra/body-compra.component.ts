import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra/compra.service';

@Component({
  selector: 'app-body-compra',
  templateUrl: './body-compra.component.html',
  styleUrls: ['./body-compra.component.css']
})
export class BodyCompraComponent implements OnInit {
  metodoPago: string | undefined;
  accion: string | undefined;
  cantidad: number | undefined;

  constructor(private compraService: CompraService) {}

  ngOnInit() {
    const datosCompra = this.compraService.getDatosCompra();

    if (datosCompra) {
      this.metodoPago = datosCompra.metodoPago;
      this.accion = datosCompra.name;
      this.cantidad = datosCompra.cantidad;
    }
  }
}