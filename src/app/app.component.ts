import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaCompraComponent } from './Components/lista-compra/lista-compra.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShopingList';
}
