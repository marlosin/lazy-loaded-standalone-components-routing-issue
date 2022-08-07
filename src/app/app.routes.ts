import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
  {
    path: 'subs',
    loadChildren: () => import('./sub/sub.routes').then(mod => mod.SUB_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'subs',
  },
];
