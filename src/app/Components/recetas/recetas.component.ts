import { Component } from '@angular/core';
import { RECETAS } from '../../Data/receta.data';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  listaRecetas = RECETAS


}
