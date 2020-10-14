import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorLibPage } from './valor-lib.page';

const routes: Routes = [
  {
    path: '',
    component: ValorLibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorLibPageRoutingModule {}
