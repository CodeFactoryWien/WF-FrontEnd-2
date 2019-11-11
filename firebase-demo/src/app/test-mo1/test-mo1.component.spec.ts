import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMo1Component } from './test-mo1.component';

describe('TestMo1Component', () => {
  let component: TestMo1Component;
  let fixture: ComponentFixture<TestMo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
