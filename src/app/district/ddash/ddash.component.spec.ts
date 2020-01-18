import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdashComponent } from './ddash.component';

describe('DdashComponent', () => {
  let component: DdashComponent;
  let fixture: ComponentFixture<DdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
