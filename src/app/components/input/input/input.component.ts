import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {

  @Input()
  type: string = "text";
  @Input()
  inputName: string = "default input name"
  @Input()
  errorMessage: string = "there was an error"

}
