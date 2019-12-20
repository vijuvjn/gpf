import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TadvComponent } from './tadv.component';

const routes: Routes = [
  { path: '', component: TadvComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TadvRoutingModule { }
