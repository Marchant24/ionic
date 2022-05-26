import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegurityPageRoutingModule } from './segurity-routing.module';

import { SegurityPage } from './segurity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegurityPageRoutingModule
  ],
  declarations: [SegurityPage]
})
export class SegurityPageModule {}
