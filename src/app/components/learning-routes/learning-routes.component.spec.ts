import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningRoutesComponent } from './learning-routes.component';

describe('LearningRoutesComponent', () => {
  let component: LearningRoutesComponent;
  let fixture: ComponentFixture<LearningRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
