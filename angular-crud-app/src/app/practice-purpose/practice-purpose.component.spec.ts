import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticePurposeComponent } from './practice-purpose.component';

describe('PracticePurposeComponent', () => {
  let component: PracticePurposeComponent;
  let fixture: ComponentFixture<PracticePurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticePurposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticePurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
