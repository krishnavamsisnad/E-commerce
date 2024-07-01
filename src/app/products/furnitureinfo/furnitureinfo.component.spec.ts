import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureinfoComponent } from './furnitureinfo.component';

describe('FurnitureinfoComponent', () => {
  let component: FurnitureinfoComponent;
  let fixture: ComponentFixture<FurnitureinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnitureinfoComponent]
    });
    fixture = TestBed.createComponent(FurnitureinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
