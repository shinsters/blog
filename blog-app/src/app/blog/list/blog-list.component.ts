import { Component, OnInit } from '@angular/core';

import { BlogRepository } from '../services/blog.repository'

@Component({
  moduleId: module.id,
  selector: 'app-blog-list',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.css'],
  providers: [BlogRepository]
})
export class BlogListComponent implements OnInit {

  constructor(private blogRepository: BlogRepository) { }

  ngOnInit() {
  }

}
