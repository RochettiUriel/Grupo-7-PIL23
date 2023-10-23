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

  showData(){
    console.log(this.formCompra.value)
    this.compraService.setDatosCompra(this.formCompra);
  }
  constructor(private formBuilder: FormBuilder, private compraService: CompraService) {}


  ngOnInit(): void {}

}
