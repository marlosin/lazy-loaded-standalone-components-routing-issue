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
      *ngFor="let sub of subs"
      [style.cursor]="'pointer'"
      (click)="editSub(sub.id)"
    >{{ sub.title }}</li>
  </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubListPageComponent implements OnInit {

  readonly subs = [
    {
      id: 1,
      title: 'First Sub',
      enabled: true,
      update_ts: Date.now() - 86400 * 1000,
    },
    {
      id: 2,
      title: 'Second Sub',
      enabled: true,
      update_ts: Date.now() - (2 * 86400 * 1000),
    },
    {
      id: 3,
      title: 'Third Sub',
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

  editSub(subId: number): void {
    this._routerService.navigate({
      path: 'subs/edit',
      params: [subId],
    });
  }
}
