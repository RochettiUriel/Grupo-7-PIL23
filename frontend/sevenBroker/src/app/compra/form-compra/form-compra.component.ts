import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompraService } from 'src/app/services/compra/compra.service';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})

export class FormCompraComponent implements OnInit{  
  formCompra = this.formBuilder.group({
    name: ['',[Validators.required]],
    cantidad: ['',[Validators.required]],
    metodoPago: ['',[Validators.required]],
  }); 
  compraInfo: any;


  showData(){
    console.log(this.formCompra.value)
  }
  constructor(private formBuilder: FormBuilder, private compraService: CompraService) {}


  ngOnInit(): void {
    this.compraService.get().subscribe((data) => {
      this.compraInfo = data; 
    });
    (error: any) => {
      console.error('Error al obtener datos del servicio:', error);
    }
  }
  // ngOnInit(): void {
  //   this.compraService.get().subscribe({
  //     next: (data) => {
  //       this.compraInfo = data; 
  //     },
  //     error: (error) => {
  //       console.error('Error al obtener datos del servicio de compra:', error);
  //     }
  //   });
  // }

  calcularTotal(): number {
    if (this.compraInfo && this.formCompra.value.cantidad) {
      const cantidad: number = parseFloat(this.formCompra.value.cantidad); 
      const precioCompra = this.compraInfo.precioCompra; 
       return cantidad * precioCompra;
    } else {
      return 0;
    }
  }
  obtenerFechaActual(): Date {
    return new Date(); 
  }

  mostrarDataConsola(){
    if (this.compraInfo) {
      console.log('Fecha:', this.compraInfo.fecha);
      console.log('Precio de Compra:', this.compraInfo.precioCompra);
      console.log('Símbolo:', this.compraInfo.simbolo);
    }
  }
  }

