import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoContaPageRoutingModule } from './info-conta-routing.module';

import { InfoContaPage } from './info-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoContaPageRoutingModule
  ],
  declarations: [InfoContaPage]
})
export class InfoContaPageModule {}
