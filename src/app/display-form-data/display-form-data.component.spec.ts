import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormDataComponent } from './display-form-data.component';

describe('DisplayFormDataComponent', () => {
  let component: DisplayFormDataComponent;
  let fixture: ComponentFixture<DisplayFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayFormDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
