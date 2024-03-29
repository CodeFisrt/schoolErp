import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRouteFoundComponent } from './no-route-found.component';

describe('NoRouteFoundComponent', () => {
  let component: NoRouteFoundComponent;
  let fixture: ComponentFixture<NoRouteFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoRouteFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoRouteFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
