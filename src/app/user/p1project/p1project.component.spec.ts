import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1projectComponent } from './p1project.component';

describe('P1projectComponent', () => {
  let component: P1projectComponent;
  let fixture: ComponentFixture<P1projectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P1projectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P1projectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
