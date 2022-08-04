import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ApiService } from 'app/core/services/api.service';
import { DashboardResponse, IArticle } from '../models';

@Injectable()
export class ArticleService {
  readonly apiPath = '/api/{api}/lazy-loaded-issue-app/articles';

  constructor(
    private _apiService: ApiService,
  ) { }

  getAll$(): Observable<IArticle[]> {
    return this._apiService.getPB(this.apiPath).pipe(
      map(bytes => DashboardResponse.decode(bytes)),
      map(({ articles }) => articles),
    );
  }
}
