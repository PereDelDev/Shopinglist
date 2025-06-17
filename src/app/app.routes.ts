import { Routes } from '@angular/router';
import { ListaCompraComponent } from './Components/lista-compra/lista-compra.component';
import { RecetasComponent } from './Components/recetas/recetas.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { DetalleRecetaComponent } from './Components/detalle-receta/detalle-receta.component';

export const routes: Routes = [
    { path: 'lista', component: ListaCompraComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: 'recetas/:recetaId', component: DetalleRecetaComponent },
    { path: 'perfil', component: PerfilComponent },
];
