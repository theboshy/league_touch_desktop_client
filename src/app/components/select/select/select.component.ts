import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent {

  @Input()
  options: Array<any> = [];
  @Input()
  selectLabel: string = 'Select';

}
