import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GobiernoPage } from './gobierno.page';

const routes: Routes = [
  {
    path: '',
    component: GobiernoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GobiernoPageRoutingModule {}
