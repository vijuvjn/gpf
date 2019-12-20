import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TadvRoutingModule } from './tadv-routing.module';
import { TadvComponent } from './tadv.component';

@NgModule({
  declarations: [TadvComponent],
  imports: [
    CommonModule,
    TadvRoutingModule
  ]
})
export class TadvModule { }
