import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Policy1RoutingModule } from './policy1-routing.module';
import { Policy1Component } from './policy1.component';


@NgModule({
  declarations: [
    Policy1Component
  ],
  imports: [
    CommonModule,
    Policy1RoutingModule
  ]
})
export class Policy1Module { }
