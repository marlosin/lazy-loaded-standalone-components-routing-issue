import { enableProdMode, importProvidersFrom, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { environment } from './environments/environment';
import { RootComponent } from './app/core/root.component';
import { APP_ROUTES } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(RootComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(
      RouterModule.forRoot(
        APP_ROUTES,
        { paramsInheritanceStrategy: 'always' },
      ),
      BrowserModule,
      HttpClientModule,
    ),
  ],
});
