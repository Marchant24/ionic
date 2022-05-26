import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IluminationPage } from './ilumination.page';

const routes: Routes = [
  {
    path: '',
    component: IluminationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IluminationPageRoutingModule {}
