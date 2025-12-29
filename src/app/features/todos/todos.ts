import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../core/services/todos/todos.service';
import { Todo } from '../../core/models/todos.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../../shared/components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from './pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export default class TodosComponent implements OnInit{
  todoService= inject(TodosService)
  todoItems = signal<Array<Todo>>([])
  searchTerm = signal('');
  isLoading = computed(() =>{
    console.log(this.todoItems())
    return this.todoItems().length === 0
  }
  
);
  ngOnInit() {
   this.todoService.getTodoForApi().pipe(
    catchError(err => {
      console.log('error -> ', err )
      throw err;
    })
   ).subscribe(todos => 
   {
    this.todoItems.set(todos);
   }
   )
  }
  
   updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
    }

}
