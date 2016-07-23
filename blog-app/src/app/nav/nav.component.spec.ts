/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('Component: Nav', () => {

  beforeEach(() => {
    addProviders([NavComponent]);
  });

  it('should create an instance', () => {
    inject([NavComponent], (component: NavComponent) => {
      expect(component).toBeTruthy();
    })})

  it('should have as title \'John Harrison\'', () => {
    inject([NavComponent], (component: NavComponent) => {
    expect(component.title).toEqual('John Harrison');
  })})

});
