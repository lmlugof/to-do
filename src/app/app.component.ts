import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app'
  welcome = 'Bienvenido a la primera aplicación en angular!';
  tasks = [
    'Instalar Angular CLI',
    'Crear un proyecto',
    'Crear componentes',
    'Crear servicio'
  ]
}
