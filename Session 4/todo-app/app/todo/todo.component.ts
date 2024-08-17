import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      const newTask: Todo = {
        id: Date.now(),
        title: this.newTodo,
        completed: false
      };
      this.todos.push(newTask);
      this.newTodo = '';
    }
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
