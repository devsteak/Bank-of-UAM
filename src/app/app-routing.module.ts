import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'etapa1',
    loadChildren: () => import('./etapa1/etapa1.module').then( m => m.Etapa1PageModule)
  },
  {
    path: 'info-conta',
    loadChildren: () => import('./info-conta/info-conta.module').then( m => m.InfoContaPageModule)
  },
  {
    path: 'valor',
    loadChildren: () => import('./valor/valor.module').then( m => m.ValorPageModule)
  },
  {
    path: 'valor-lib',
    loadChildren: () => import('./valor-lib/valor-lib.module').then( m => m.ValorLibPageModule)
  },
  {
    path: 'valor-cont',
    loadChildren: () => import('./valor-cont/valor-cont.module').then( m => m.ValorContPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
