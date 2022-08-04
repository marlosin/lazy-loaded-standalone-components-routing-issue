import { Route } from '@angular/router';

export const ARTICLES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/article-main-page/article-main-page.component').then(mod => mod.ArticleMainPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/article-list-page/article-list-page.component').then(mod => mod.ArticleListPageComponent),
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./pages/article-edit-page/article-edit-page.component').then(mod => mod.ArticleEditPageComponent),
      },
    ],
  },
];
