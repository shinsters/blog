import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {

  /** the main page header title */
  title = 'John Harrison';

  constructor() { 
  }

  ngOnInit() {
  }
}
