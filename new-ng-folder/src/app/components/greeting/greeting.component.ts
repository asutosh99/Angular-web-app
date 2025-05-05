import { Component, input } from '@angular/core';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
message=input('hello from Greeting');
}
