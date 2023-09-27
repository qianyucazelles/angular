import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurDetailsComponent } from './formateur-details.component';

describe('FormateurDetailsComponent', () => {
  let component: FormateurDetailsComponent;
  let fixture: ComponentFixture<FormateurDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormateurDetailsComponent]
    });
    fixture = TestBed.createComponent(FormateurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
