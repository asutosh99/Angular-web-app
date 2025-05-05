import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter=signal(0);
increment=()=>{
  this.counter.update(val=>val+1);
}
Decrement=()=>{
  this.counter.update(val=>val-1);
}
reset=()=>{
  this.counter.set(0);
}
}
