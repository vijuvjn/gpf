import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NraComponent } from './nra.component';

const routes: Routes = [
  { path: '', component: NraComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NraRoutingModule { }
