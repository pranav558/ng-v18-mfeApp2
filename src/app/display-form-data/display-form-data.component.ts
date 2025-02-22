import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

interface Mfe1Details {
  name: string;
  email: string;
}

interface Mfe2Details {
  msg: string
}

@Component({
  selector: 'app-display-form-data',
  standalone: true,
  imports: [NgIf],
  templateUrl: './display-form-data.component.html',
  styleUrl: './display-form-data.component.scss'
})
export class DisplayFormDataComponent {
  mfe1Details = toSignal(fromEvent<CustomEvent<Mfe1Details>>(window, 'mfe1:reactiveFormData'), {
    initialValue: new CustomEvent<Mfe1Details>('mfe1:reactiveFormData', {
      detail: { name: '', email: '' }
    })
  });

  sendData(): void {
    dispatchEvent(new CustomEvent<Mfe2Details>('mfe2:data',{ detail : { msg : 'Micro frontend 2 saying Hi' }}));
  }

}
