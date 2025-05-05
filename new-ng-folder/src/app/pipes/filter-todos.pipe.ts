import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../components/model/todo.types';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(Todos: Array<TodoItem>, searchItem: string): TodoItem[] {
    if(searchItem=== null){
      return Todos;
    }
   return Todos.filter((todo)=>todo.title.toLowerCase().includes(searchItem.toLowerCase()));
  }

}
