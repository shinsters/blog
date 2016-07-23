import { Component, OnInit } from '@angular/core';

import { BlogRepository } from './services/blog.repository'

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  providers: [BlogRepository]
})
export class BlogComponent implements OnInit {

  constructor(private blogRepository: BlogRepository) { }

  ngOnInit() {
  }

}
