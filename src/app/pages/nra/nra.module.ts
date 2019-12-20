import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NraRoutingModule } from './nra-routing.module';
import { NraComponent } from './nra.component';

@NgModule({
  declarations: [NraComponent],
  imports: [
    CommonModule,
    NraRoutingModule
  ]
})
export class NraModule { }
