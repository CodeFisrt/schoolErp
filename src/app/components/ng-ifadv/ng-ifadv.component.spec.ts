import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIFAdvComponent } from './ng-ifadv.component';

describe('NgIFAdvComponent', () => {
  let component: NgIFAdvComponent;
  let fixture: ComponentFixture<NgIFAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgIFAdvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgIFAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
