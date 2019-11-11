import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinbuttonComponent } from './joinbutton.component';

describe('JoinbuttonComponent', () => {
  let component: JoinbuttonComponent;
  let fixture: ComponentFixture<JoinbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
