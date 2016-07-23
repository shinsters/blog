import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-blog-card',
  templateUrl: 'blog-card.component.html',
  styleUrls: ['blog-card.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})
export class BlogCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
