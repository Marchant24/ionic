import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GobiernoPageRoutingModule } from './gobierno-routing.module';

import { GobiernoPage } from './gobierno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GobiernoPageRoutingModule
  ],
  declarations: [GobiernoPage]
})
export class GobiernoPageModule {}
