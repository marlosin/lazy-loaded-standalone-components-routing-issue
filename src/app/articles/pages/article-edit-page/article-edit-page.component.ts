import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

import { CoreModule } from 'app/core/core.module';
import { RouterService } from 'app/core/services/router.service';

import { ArticleEditComponent } from 'app/articles/components/article-edit/article-edit.component';

@Component({
  selector: 'lazy-loaded-issue-app-article-edit-page',
  standalone: true,
  imports: [
    CoreModule,
    ArticleEditComponent,
  ],
  template: `
    <lazy-loaded-issue-app-article-edit></lazy-loaded-issue-app-article-edit>
  `,
  host: {
    class: 'contents',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleEditPageComponent implements OnInit {

  readonly article$ = this._routerService.params$.pipe(
    tap(params => console.log('params: ', params)),
    map(({ id }) => ({ id })),
  );

  constructor(
    private _routerService: RouterService,
  ) { }

  ngOnInit(): void {
    this.article$.subscribe({
      next: (id) => {
        console.log('id param is:', id);
      }
    });
  }

}
