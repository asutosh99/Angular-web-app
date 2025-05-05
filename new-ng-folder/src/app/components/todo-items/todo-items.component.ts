import { Component, input, output } from '@angular/core';
import { TodoItem } from '../model/todo.types';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.scss'
})

export class TodoItemsComponent {
  todoIteams=input.required<TodoItem>();
  inputToggle=output<TodoItem>();
  onTodoClicked=()=>{
    this.inputToggle.emit(this.todoIteams());
  }
}
