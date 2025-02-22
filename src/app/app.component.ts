import { Component } from '@angular/core';
import { DisplayFormDataComponent } from './display-form-data/display-form-data.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayFormDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
