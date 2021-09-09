import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test2RoutingModule } from './test2-routing.module';
import { Test2Component } from './test2.component';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [
    Test2Component
  ],
  imports: [
    CommonModule,
    Test2RoutingModule,
    CardModule,
    DividerModule,
    ButtonModule,
    TabMenuModule
  ]
})
export class Test2Module { }
