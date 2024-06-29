import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerComponent } from './speaker.component';

describe('SpeakerComponent', () => {
  let component: SpeakerComponent;
  let fixture: ComponentFixture<SpeakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakerComponent]
    });
    fixture = TestBed.createComponent(SpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
