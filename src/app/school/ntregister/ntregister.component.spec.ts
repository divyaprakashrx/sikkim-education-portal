import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtregisterComponent } from './ntregister.component';

describe('NtregisterComponent', () => {
  let component: NtregisterComponent;
  let fixture: ComponentFixture<NtregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
