/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BlogListComponent } from './blog-list.component';

describe('Component: Blog-List', () => {

  beforeEach(() => {
    addProviders([BlogListComponent]);
  });

  /** make sure it instantiates */
  it('should create an instance', () => {
    inject([BlogListComponent], (component: BlogListComponent) => {
    expect(component).toBeTruthy();
  })})
  
});
