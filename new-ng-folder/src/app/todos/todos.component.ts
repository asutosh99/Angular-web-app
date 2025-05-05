import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoesService } from '../services/todoes.service';
import { TodoItem } from '../components/model/todo.types';
import { catchError } from 'rxjs';
import { TodoItemsComponent } from '../components/todo-items/todo-items.component';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemsComponent,FilterTodosPipe,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})

export class TodosComponent implements OnInit{
todoService=inject(TodoesService);
todoIteams=signal<Array<TodoItem>>([]);
searchInput=signal("");

updateTodos(todoIteam:TodoItem){
this.todoIteams.update((todos)=>{
  return todos.map((todo)=>{
      if(todo.id===todoIteam.id){
        return{
          ...todo,
          completed:!todoIteam.completed
        }
      }
      return todo;
    })
  
})
}
ngOnInit(): void {
// this.todoIteams.set(this.getTodoItem.todoItem);
this.todoService.getDataFromApi().
pipe(
catchError((err)=>{
  console.log(err)
  throw err;
})).subscribe((todos)=>{
  this.todoIteams.set(todos);
})
}
}
