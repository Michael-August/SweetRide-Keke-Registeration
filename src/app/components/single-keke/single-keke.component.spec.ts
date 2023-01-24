import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleKekeComponent } from './single-keke.component';

describe('SingleKekeComponent', () => {
  let component: SingleKekeComponent;
  let fixture: ComponentFixture<SingleKekeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleKekeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleKekeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
