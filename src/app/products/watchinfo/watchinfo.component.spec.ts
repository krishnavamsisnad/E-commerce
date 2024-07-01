import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchinfoComponent } from './watchinfo.component';

describe('WatchinfoComponent', () => {
  let component: WatchinfoComponent;
  let fixture: ComponentFixture<WatchinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchinfoComponent]
    });
    fixture = TestBed.createComponent(WatchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
