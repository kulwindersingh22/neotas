import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from './test1.component';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Test1Component
  ],
  imports: [
    CommonModule,
    Test1RoutingModule,
    CardModule,
    DividerModule,
    ButtonModule,
    TabMenuModule,
    InputTextModule,
    FormsModule
  ]
})
export class Test1Module { }
