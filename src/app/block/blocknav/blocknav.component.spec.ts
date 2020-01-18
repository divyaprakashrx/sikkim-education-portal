import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocknavComponent } from './blocknav.component';

describe('BlocknavComponent', () => {
  let component: BlocknavComponent;
  let fixture: ComponentFixture<BlocknavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocknavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocknavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
