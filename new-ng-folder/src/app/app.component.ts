import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './components/headers/headers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadersComponent],
  template: `
  
  <app-headers/>
  <router-outlet/>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
