import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core/core.module';

@Component({
  selector: 'lazy-loaded-issue-app-sub-main-page',
  standalone: true,
  imports: [
    CoreModule,
    RouterModule,
  ],
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubMainPageComponent { }
