import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Policy4RoutingModule } from './policy4-routing.module';
import { Policy4Component } from './policy4.component';


@NgModule({
  declarations: [
    Policy4Component
  ],
  imports: [
    CommonModule,
    Policy4RoutingModule
  ]
})
export class Policy4Module { }
