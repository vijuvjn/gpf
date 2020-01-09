import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
  ]
})
export class SidenavModule { }
