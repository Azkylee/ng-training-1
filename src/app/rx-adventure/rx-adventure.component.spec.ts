/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RxAdventureComponent } from './rx-adventure.component';

describe('RxAdventureComponent', () => {
  let component: RxAdventureComponent;
  let fixture: ComponentFixture<RxAdventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxAdventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
