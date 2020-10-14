import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorLibPageRoutingModule } from './valor-lib-routing.module';

import { ValorLibPage } from './valor-lib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorLibPageRoutingModule
  ],
  declarations: [ValorLibPage]
})
export class ValorLibPageModule {}
