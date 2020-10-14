import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorContPageRoutingModule } from './valor-cont-routing.module';

import { ValorContPage } from './valor-cont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorContPageRoutingModule
  ],
  declarations: [ValorContPage]
})
export class ValorContPageModule {}
