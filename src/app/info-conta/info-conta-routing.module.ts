import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoContaPage } from './info-conta.page';

const routes: Routes = [
  {
    path: '',
    component: InfoContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoContaPageRoutingModule {}
