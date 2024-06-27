import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitersComponent } from './regiters.component';

describe('RegitersComponent', () => {
  let component: RegitersComponent;
  let fixture: ComponentFixture<RegitersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegitersComponent]
    });
    fixture = TestBed.createComponent(RegitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
