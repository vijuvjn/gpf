import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavModule } from './components/sidenav/sidenav.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        m => m.LoginModule
      )
  },

  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      {
        path: 'new',
        loadChildren: () =>
          import('./pages/new/new.module').then(
            m => m.NewModule
          )
      },

      {
        path: 'edit',
        loadChildren: () =>
          import('./pages/edit/edit.module').then(
            m => m.EditModule
          )
      },

      {
        path: 'data',
        loadChildren: () =>
          import('./pages/data/data.module').then(
            m => m.DataModule
          )
      },

      {
        path: 'tadv',
        loadChildren: () =>
          import('./pages/tadv/tadv.module').then(
            m => m.TadvModule
          )
      },

      {
        path: 'nra',
        loadChildren: () =>
          import('./pages/nra/nra.module').then(
            m => m.NraModule
          )
      },

      {
        path: 'convert',
        loadChildren: () =>
          import('./pages/convert/convert.module').then(
            m => m.ConvertModule
          )
      },

      {
        path: 'close',
        loadChildren: () =>
          import('./pages/close/close.module').then(
            m => m.CloseModule
          )
      },

      {
        path: 'statement',
        loadChildren: () =>
          import('./pages/statement/statement.module').then(
            m => m.StatementModule
          )
      },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes), SidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
