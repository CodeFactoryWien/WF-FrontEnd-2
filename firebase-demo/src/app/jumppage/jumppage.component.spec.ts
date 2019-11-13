import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumppageComponent } from './jumppage.component';

describe('JumppageComponent', () => {
  let component: JumppageComponent;
  let fixture: ComponentFixture<JumppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
