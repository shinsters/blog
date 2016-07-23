import { Component, OnInit } from '@angular/core';

import { BlogCardComponent } from '../card/blog-card.component'

import { BlogRepository } from '../services/blog.repository'

import { Blog } from '../entities/blog'

@Component({
  moduleId: module.id,
  selector: 'app-blog-list',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.css'],
  providers: [BlogRepository],
  directives: [BlogCardComponent]
})
export class BlogListComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogRepository: BlogRepository) { }

  ngOnInit() {
   this.blogRepository.getBlogs().then(blogs => this.blogs = blogs);
  }
}
