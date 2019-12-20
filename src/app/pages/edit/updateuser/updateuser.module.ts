import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UpdateuserComponent } from './updateuser.component';



@NgModule({
  declarations: [UpdateuserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  entryComponents: [UpdateuserComponent],
  exports: [UpdateuserComponent]
})
export class UpdateuserModule { }
