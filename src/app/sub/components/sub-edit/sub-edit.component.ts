import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterService } from 'app/core/services/router.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lazy-loaded-issue-app-sub-edit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    {{ 'params: ' + (params$ | async | json) }}<br>
    {{ 'paramMap ' + (paramMap$ | async | json) }}<br>
    {{ 'paramsSnapshot ' + (paramsSnapshot | json) }}<br>
    {{ 'activatedRoute.params ' + (activatedParams$ | async | json) }}<br>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubEditComponent {
  readonly params$ = this._routerService.params$;
  readonly paramMap$ = this._routerService.paramMap$;
  readonly paramsSnapshot = this._routerService.snapshot.params;

  readonly activatedParams$ = this._activatedRoute.params;

  constructor(
    private _routerService: RouterService,
    private _activatedRoute: ActivatedRoute,
  ) {}
}
