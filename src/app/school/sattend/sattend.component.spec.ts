import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattendComponent } from './sattend.component';

describe('SattendComponent', () => {
  let component: SattendComponent;
  let fixture: ComponentFixture<SattendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
