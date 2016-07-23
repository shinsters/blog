import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// do I need to import all these seperately?
import { AppComponent,  environment } from './app/';

import { HTTP_PROVIDERS } from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms'; 

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
]);