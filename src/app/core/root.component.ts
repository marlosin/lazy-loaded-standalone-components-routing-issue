import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'lazy-loaded-issue-app-root',
  host: {
    class: 'contents',
  },
  template: `<router-outlet></router-outlet>`,
})
export class RootComponent { }
