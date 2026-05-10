import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { 
    PreloadAllModules, 
    provideRouter, 
    withDebugTracing, 
    withPreloading, 
    withRouterConfig 
} 
from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';



// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(HttpClientModule),
//     provideRouter(APP_ROUTES, 
//       withPreloading(PreloadAllModules),
//       withDebugTracing(),
//     ),
//     importProvidersFrom(TicketsModule),
//     provideAnimations(),
//     importProvidersFrom(LayoutModule),
//   ]
// });