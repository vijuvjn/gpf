import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseRoutingModule } from './close-routing.module';
import { CloseComponent } from './close.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [CloseComponent],
  imports: [
    CommonModule,
    CloseRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CloseModule { }
