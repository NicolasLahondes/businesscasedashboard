import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayType2Component } from './display-type2.component';

describe('DisplayType2Component', () => {
  let component: DisplayType2Component;
  let fixture: ComponentFixture<DisplayType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayType2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
