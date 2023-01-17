import { Component } from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor() {
    console.log(APP_BASE_HREF)
  }
}
