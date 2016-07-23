import { provideRouter, RouterConfig } from '@angular/router';
import { BlogListComponent } from '../app/blog/';

const routes: RouterConfig = [
  { path: '', component: BlogListComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];