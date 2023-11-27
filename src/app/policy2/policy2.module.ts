import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Policy2RoutingModule } from './policy2-routing.module';
import { Policy2Component } from './policy2.component';


@NgModule({
  declarations: [
    Policy2Component
  ],
  imports: [
    CommonModule,
    Policy2RoutingModule
  ]
})
export class Policy2Module { }
