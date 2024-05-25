import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosStore } from './store/todo.store';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  store = inject(TodosStore);

  ngOnInit(): void {
    this.loadTodos().then( () => console.log("Todos Loaded!"));
  }

  async loadTodos() {
    this.store.loadAll();
  }
}
