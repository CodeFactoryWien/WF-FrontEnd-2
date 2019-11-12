import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNameComponent } from './teacher-name.component';

describe('TeacherNameComponent', () => {
  let component: TeacherNameComponent;
  let fixture: ComponentFixture<TeacherNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
