import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TregisterComponent } from './tregister.component';

describe('TregisterComponent', () => {
  let component: TregisterComponent;
  let fixture: ComponentFixture<TregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
