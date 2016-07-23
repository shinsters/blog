import { Component } from '@angular/core';
import { NavComponent } from '../app/nav/';

import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
