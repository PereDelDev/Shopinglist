import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-receta',
  standalone: true,
  imports: [],
  templateUrl: './detalle-receta.component.html',
  styleUrl: './detalle-receta.component.css'
})
export class DetalleRecetaComponent {

  recetaId: number = 0
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.recetaId = Number(params['cursoId']);

    })
  }

}
