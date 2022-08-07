import { Route } from '@angular/router';

export const SUB_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/sub-main-page/sub-main-page.component').then(mod => mod.SubMainPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/sub-list-page/sub-list-page.component').then(mod => mod.SubListPageComponent),
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./pages/sub-edit-page/sub-edit-page.component').then(mod => mod.SubEditPageComponent),
      },
    ],
  },
];
