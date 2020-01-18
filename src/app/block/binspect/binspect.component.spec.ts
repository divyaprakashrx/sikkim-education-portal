import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinspectComponent } from './binspect.component';

describe('BinspectComponent', () => {
  let component: BinspectComponent;
  let fixture: ComponentFixture<BinspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
