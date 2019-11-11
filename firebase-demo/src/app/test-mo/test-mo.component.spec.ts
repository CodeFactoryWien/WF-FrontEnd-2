import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMoComponent } from './test-mo.component';

describe('TestMoComponent', () => {
  let component: TestMoComponent;
  let fixture: ComponentFixture<TestMoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
