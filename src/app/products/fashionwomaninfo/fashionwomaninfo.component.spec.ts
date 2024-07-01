import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionwomaninfoComponent } from './fashionwomaninfo.component';

describe('FashionwomaninfoComponent', () => {
  let component: FashionwomaninfoComponent;
  let fixture: ComponentFixture<FashionwomaninfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionwomaninfoComponent]
    });
    fixture = TestBed.createComponent(FashionwomaninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
