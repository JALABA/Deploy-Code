import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Policy4Component } from './policy4.component';

describe('Policy4Component', () => {
  let component: Policy4Component;
  let fixture: ComponentFixture<Policy4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Policy4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Policy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
