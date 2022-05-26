import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentilationPageRoutingModule } from './ventilation-routing.module';

import { VentilationPage } from './ventilation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentilationPageRoutingModule
  ],
  declarations: [VentilationPage]
})
export class VentilationPageModule {}
