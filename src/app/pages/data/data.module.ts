import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatIconModule, MatTooltipModule, MatTabsModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule
  ],
})
export class DataModule { }
