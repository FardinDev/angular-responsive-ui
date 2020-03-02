import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChowkbazarComponent } from './chowkbazar.component';

describe('ChowkbazarComponent', () => {
  let component: ChowkbazarComponent;
  let fixture: ComponentFixture<ChowkbazarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChowkbazarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChowkbazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
