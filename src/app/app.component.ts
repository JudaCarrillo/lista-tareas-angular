import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  listaTareas: string[] = [];
  nuevaTarea = '';

  private _tareasServices = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasServices.getTareas();
  }

  public eliminarTarea(index: number) {
    this._tareasServices.eliminarTarea(index);
    this.listaTareas = this._tareasServices.getTareas();
  }

  public agregarTarea() {
    this._tareasServices.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasServices.getTareas();
  }
}
