import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    data: {
      hideMenu:true,//Se oculta el menu 
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
