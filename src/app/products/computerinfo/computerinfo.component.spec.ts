import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerinfoComponent } from './computerinfo.component';

describe('ComputerinfoComponent', () => {
  let component: ComputerinfoComponent;
  let fixture: ComponentFixture<ComputerinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerinfoComponent]
    });
    fixture = TestBed.createComponent(ComputerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
