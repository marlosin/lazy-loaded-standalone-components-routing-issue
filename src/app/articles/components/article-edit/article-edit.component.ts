import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterService } from 'app/core/services/router.service';

@Component({
  selector: 'lazy-loaded-issue-app-article-edit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    {{ 'params: ' + (params$ | async | json) }}
    {{ 'paramMap ' + (paramMap$ | async | json) }}
    {{ 'paramsSnapshot ' + (paramsSnapshot | json) }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleEditComponent {
  readonly params$ = this._routerService.params$;
  readonly paramMap$ = this._routerService.paramMap$;
  readonly paramsSnapshot = this._routerService.snapshot.params;

  constructor(
    private _routerService: RouterService,
  ) {}
}
