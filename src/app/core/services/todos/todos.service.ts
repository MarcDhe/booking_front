import { inject, Injectable } from '@angular/core';
import { Todo } from '../../models/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // this one mean if provide in root dont need to reinject it 
})
export class TodosService {
  http = inject(HttpClient)
  getTodoForApi(){
    const url = "https://jsonplaceholder.typicode.com/todos"
    return this.http.get<Array<Todo>>(url)
  }
}
