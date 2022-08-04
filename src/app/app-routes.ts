import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles-routes').then(mod => mod.ARTICLES_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'articles',
  },
];
