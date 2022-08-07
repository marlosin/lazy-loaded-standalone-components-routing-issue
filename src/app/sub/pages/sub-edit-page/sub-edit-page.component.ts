import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

import { CoreModule } from 'app/core/core.module';
import { RouterService } from 'app/core/services/router.service';

import { SubEditComponent } from 'app/sub/components/sub-edit/sub-edit.component';

@Component({
  selector: 'lazy-loaded-issue-app-sub-edit-page',
  standalone: true,
  imports: [
    CoreModule,
    SubEditComponent,
  ],
  template: `
    <lazy-loaded-issue-app-sub-edit></lazy-loaded-issue-app-sub-edit>
  `,
  host: {
    class: 'contents',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubEditPageComponent implements OnInit {

  readonly sub$ = this._routerService.params$.pipe(
    tap(params => console.log('params: ', params)),
    map(({ id }) => ({ id })),
  );

  constructor(
    private _routerService: RouterService,
  ) { }

  ngOnInit(): void {
    this.sub$.subscribe({
      next: (id) => {
        console.log('id param is:', id);
      }
    });
  }

}
