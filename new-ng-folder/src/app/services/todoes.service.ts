import { inject, Injectable } from '@angular/core';
import { TodoItem } from '../components/model/todo.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoesService {
 
//   todoItem:Array<TodoItem>=[
//     {
//       userId:1,
//   completed:true,
//   id:1,
//   title:'asda'
// },
// {
//   userId:1,
//   completed:true,
//   id:1,
//   title:'asdasd'
// }
// ]
http=inject(HttpClient)

getDataFromApi=()=>{

    const  url=`https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<TodoItem>>(url);
  }
}
