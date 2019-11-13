import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecardComponent } from './coursecard.component';

describe('CoursecardComponent', () => {
  let component: CoursecardComponent;
  let fixture: ComponentFixture<CoursecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
