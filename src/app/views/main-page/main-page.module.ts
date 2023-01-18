import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {InputModule} from "../../components/input/input.module";
import {SelectModule} from "../../components/select/select.module";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    InputModule,
    SelectModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
