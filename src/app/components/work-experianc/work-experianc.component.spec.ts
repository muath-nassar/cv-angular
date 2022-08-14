import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiancComponent } from './work-experianc.component';

describe('WorkExperiancComponent', () => {
  let component: WorkExperiancComponent;
  let fixture: ComponentFixture<WorkExperiancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperiancComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperiancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
