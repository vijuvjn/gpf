import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertRoutingModule } from './convert-routing.module';
import { ConvertComponent } from './convert.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [ConvertComponent],
  imports: [
    CommonModule,
    ConvertRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class ConvertModule { }
