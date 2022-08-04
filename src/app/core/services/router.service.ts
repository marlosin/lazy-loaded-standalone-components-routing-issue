import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppMainRoute } from '../routes';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  readonly params$ = this._route.params;
  readonly paramMap$ = this._route.paramMap;
  readonly queryParams$ = this._route.queryParams;
  readonly snapshot = this._route.snapshot;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    console.log('ActivatedRoute', _route);
    console.log('Router', _router);
  }

  navigate({ path, queryParams, params = [] }: {
    path: AppMainRoute;
    queryParams?: NavigationExtras['queryParams'],
    params?: unknown[],
  }): Promise<boolean> {
    console.log('RouterService.navigate params', [`/${path}`, ...params])
    return this._router.navigate(
      [`/${path}`, ...params],
      {
        queryParams,
      },
    );
  }
}
