import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvComponent } from './adv.component';

const routes: Routes = [
  { path: '', component: AdvComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvRoutingModule { }
