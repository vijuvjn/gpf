import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloseRoutingModule } from './close-routing.module';
import { CloseComponent } from './close.component';

@NgModule({
  declarations: [CloseComponent],
  imports: [
    CommonModule,
    CloseRoutingModule
  ]
})
export class CloseModule { }
