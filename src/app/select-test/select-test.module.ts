import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectTestRoutingModule } from './select-test-routing.module';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectTestRoutingModule,
    ButtonModule
  ]
})
export class SelectTestModule { }
