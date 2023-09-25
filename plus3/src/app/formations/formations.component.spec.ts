import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsComponent } from './formations.component';

describe('FormationComponent', () => {
  let component: FormationsComponent;
  let fixture: ComponentFixture<FormationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationsComponent]
    });
    fixture = TestBed.createComponent(FormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
