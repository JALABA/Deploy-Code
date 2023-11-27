import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Policy3RoutingModule } from './policy3-routing.module';
import { Policy3Component } from './policy3.component';


@NgModule({
  declarations: [
    Policy3Component
  ],
  imports: [
    CommonModule,
    Policy3RoutingModule
  ]
})
export class Policy3Module { }
