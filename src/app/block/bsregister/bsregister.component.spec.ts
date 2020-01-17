import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsregisterComponent } from './bsregister.component';

describe('BsregisterComponent', () => {
  let component: BsregisterComponent;
  let fixture: ComponentFixture<BsregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
