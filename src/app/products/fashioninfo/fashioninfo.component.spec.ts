import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashioninfoComponent } from './fashioninfo.component';

describe('FashioninfoComponent', () => {
  let component: FashioninfoComponent;
  let fixture: ComponentFixture<FashioninfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashioninfoComponent]
    });
    fixture = TestBed.createComponent(FashioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
