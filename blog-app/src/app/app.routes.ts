import { provideRouter, RouterConfig } from '@angular/router';
import { BlogComponent } from '../app/blog/';

const routes: RouterConfig = [
  { path: '', component: BlogComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];