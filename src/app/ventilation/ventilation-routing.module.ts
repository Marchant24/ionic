import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentilationPage } from './ventilation.page';

const routes: Routes = [
  {
    path: '',
    component: VentilationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentilationPageRoutingModule {}
