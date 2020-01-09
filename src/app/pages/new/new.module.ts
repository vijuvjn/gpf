import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    NewRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class NewModule { }
