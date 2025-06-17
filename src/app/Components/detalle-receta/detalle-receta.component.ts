import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { RECETAS } from '../../Data/receta.data';
import { Recetas } from '../../Interfaces/recetas';
import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'app-detalle-receta',
  standalone: true,
  imports: [],
  templateUrl: './detalle-receta.component.html',
  styleUrl: './detalle-receta.component.css'
})


export class DetalleRecetaComponent {
  shoppingServices = inject(ShoppingService)
  listaRecetas = RECETAS
  receta: Recetas = {
    id: 0,
    nombre: '',
    ingredientes: [],
    contenido: '',
    foto: ''
  }
  recetaId: number = 0
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.recetaId = Number(params['recetaId']);

    })
    this.receta = this.listaRecetas[this.recetaId - 1]


  }

  add(ingrediente: string) {
    this.shoppingServices.addItem(ingrediente)
  }

}
