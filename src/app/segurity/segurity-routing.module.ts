import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegurityPage } from './segurity.page';

const routes: Routes = [
  {
    path: '',
    component: SegurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegurityPageRoutingModule {}
