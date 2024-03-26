import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForAdvComponent } from './ng-for-adv.component';

describe('NgForAdvComponent', () => {
  let component: NgForAdvComponent;
  let fixture: ComponentFixture<NgForAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgForAdvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgForAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
