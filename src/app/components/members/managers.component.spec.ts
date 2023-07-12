import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersComponent } from './members.component';

describe('ManagersComponent', () => {
  let component: ManagersComponent;
  let fixture: ComponentFixture<ManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
