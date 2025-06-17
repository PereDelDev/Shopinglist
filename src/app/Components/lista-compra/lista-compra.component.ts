import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'app-lista-compra',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lista-compra.component.html',
  styleUrl: './lista-compra.component.css'
})
export class ListaCompraComponent {

  listaCompra: string[] = ['fdsa']
  listaComprada: string[] = []
  shoppingServices = inject(ShoppingService)


  ngOnInit() {

    this.listaCompra = this.shoppingServices.getList()
    this.listaComprada = this.shoppingServices.getListB()
  }


  add() {


    if (this.formulario.value.newItem !== null) {
      this.shoppingServices.addItem(this.formulario.value.newItem)
      this.formulario.reset()
      this.listaCompra = this.shoppingServices.getList()
      console.log(this.formulario.value.newItem)
    }
  }

  delete(position: number) {
    this.shoppingServices.removeItem(position)
  }
  delete2(position: number) {
    this.shoppingServices.removeItemB(position)

  }

  bought(valor: string, position: number) {
    this.shoppingServices.addItemB(valor)

    this.shoppingServices.removeItem(position)
  }

  formulario: FormGroup = new FormGroup({
    newItem: new FormControl()
  })


}
