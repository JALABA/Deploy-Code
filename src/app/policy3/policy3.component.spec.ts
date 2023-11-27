import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Policy3Component } from './policy3.component';

describe('Policy3Component', () => {
  let component: Policy3Component;
  let fixture: ComponentFixture<Policy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Policy3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Policy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
