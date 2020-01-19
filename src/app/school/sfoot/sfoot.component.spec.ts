import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfootComponent } from './sfoot.component';

describe('SfootComponent', () => {
  let component: SfootComponent;
  let fixture: ComponentFixture<SfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
