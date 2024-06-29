import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdataComponent } from './prodata.component';

describe('ProdataComponent', () => {
  let component: ProdataComponent;
  let fixture: ComponentFixture<ProdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdataComponent]
    });
    fixture = TestBed.createComponent(ProdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
