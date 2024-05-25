import { Component, effect, inject, viewChild } from '@angular/core';
import { MatFormField, MatSuffix, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup } from "@angular/material/button-toggle";
import {MatListModule} from '@angular/material/list';
import { TodosFilter, TodosStore } from '../store/todo.store';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatLabel,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatListModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  store = inject(TodosStore);

  filter = viewChild.required(MatButtonToggleGroup);

  constructor() {
    effect(() => {
      const filter = this.filter();

      filter.value = this.store.filter();
    })
  }

  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }

  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();

    await this.store.deleteTodo(id);
  }

  async onTodoToggled(id: string, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }

  onFilterTodos(event: MatButtonToggleChange) {
    const filter = event.value as TodosFilter;

    this.store.updateFilter(filter);
  }
}
