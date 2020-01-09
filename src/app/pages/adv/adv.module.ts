import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvRoutingModule } from './adv-routing.module';
import { AdvComponent } from './adv.component';
import { MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AdvComponent],
  imports: [
    CommonModule,
    AdvRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AdvModule { }
