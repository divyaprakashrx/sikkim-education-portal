import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnavComponent } from './dnav.component';

describe('DnavComponent', () => {
  let component: DnavComponent;
  let fixture: ComponentFixture<DnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
