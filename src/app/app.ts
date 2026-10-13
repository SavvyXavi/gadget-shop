import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Inventory } from './AppComponents/inventory/inventory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Inventory],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gadget-shop');
}
