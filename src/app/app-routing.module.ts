import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./pages/alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'alert-details',
    loadChildren: () => import('./pages/alert-details/alert-details.module').then( m => m.AlertDetailsPageModule)
  },
  {
    path: 'alarm',
    loadChildren: () => import('./pages/alarm/alarm.module').then( m => m.AlarmPageModule)
  },
  {
    path: 'meters',
    loadChildren: () => import('./pages/meters/meters.module').then( m => m.MetersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
