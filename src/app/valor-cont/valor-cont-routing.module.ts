import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorContPage } from './valor-cont.page';

const routes: Routes = [
  {
    path: '',
    component: ValorContPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorContPageRoutingModule {}
