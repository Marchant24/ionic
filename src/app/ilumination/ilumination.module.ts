import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IluminationPageRoutingModule } from './ilumination-routing.module';

import { IluminationPage } from './ilumination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IluminationPageRoutingModule
  ],
  declarations: [IluminationPage]
})
export class IluminationPageModule {}
