import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compra',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lista-compra.component.html',
  styleUrl: './lista-compra.component.css'
})
export class ListaCompraComponent {

  listaCompra: string[] = ['zanahoria', 'calamares']
  listaComprada: string[] = []

  add() {
    console.log(this.formulario.value.newIteam)
    if (this.formulario.value.newIteam !== null) {
      this.listaCompra.push(this.formulario.value.newIteam)
      this.formulario.reset()
    }
  }

  delete(position: number) {
    this.listaCompra.splice(position, 1)
  }
  delete2(position: number) {
    this.listaComprada.splice(position, 1)
  }

  bought(valor: string, position: number) {
    this.listaComprada.push(valor)
    this.listaCompra.splice(position, 1)
  }

  formulario: FormGroup = new FormGroup({
    newIteam: new FormControl()
  })


}
