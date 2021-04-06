import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuddlesectionComponent } from './huddlesection.component';

describe('HuddlesectionComponent', () => {
  let component: HuddlesectionComponent;
  let fixture: ComponentFixture<HuddlesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuddlesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuddlesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
