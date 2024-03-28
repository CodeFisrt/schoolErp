import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyel2Component } from './ng-styel2.component';

describe('NgStyel2Component', () => {
  let component: NgStyel2Component;
  let fixture: ComponentFixture<NgStyel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgStyel2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgStyel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
