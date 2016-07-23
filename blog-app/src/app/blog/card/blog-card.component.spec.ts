/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BlogCardComponent } from './blog-card.component';

describe('Component: BlogCard', () => {
  it('should create an instance', () => {
    let component = new BlogCardComponent();
    expect(component).toBeTruthy();
  });
});
