import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2projectComponent } from './p2project.component';

describe('P2projectComponent', () => {
  let component: P2projectComponent;
  let fixture: ComponentFixture<P2projectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P2projectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2projectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
