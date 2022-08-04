import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

import { CoreModule } from 'app/core/core.module';
import { RouterService } from 'app/core/services/router.service';

@Component({
  standalone: true,
  imports: [
    CoreModule,
  ],
  template: `
  <ul>
    <li
      *ngFor="let article of articles"
      [style.cursor]="'pointer'"
      (click)="editArticle(article.id)"
    >{{ article.title }}</li>
  </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListPageComponent implements OnInit {

  readonly articles = [
    {
      id: 1,
      title: 'First Article',
      enabled: true,
      update_ts: Date.now() - 86400 * 1000,
    },
    {
      id: 2,
      title: 'Second Article',
      enabled: true,
      update_ts: Date.now() - (2 * 86400 * 1000),
    },
    {
      id: 3,
      title: 'Third Article',
      enabled: false,
      update_ts: Date.now() - (7 * 86400 * 1000),
    },
  ];

  constructor(
    private _routerService: RouterService,
  ) {}

  ngOnInit(): void {
    this._routerService.params$.pipe(
      tap((params) => {
        console.log('params in parent component is', params);
      }),
    );
  }

  editArticle(articleId: number): void {
    this._routerService.navigate({
      path: 'articles/edit',
      params: [articleId],
    });
  }
}
