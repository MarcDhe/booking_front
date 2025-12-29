import { Component, input, output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Todo } from '../../../core/models/todos.type';
import { HighlightCompletedTodoDirective } from '../../../features/todos/directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
