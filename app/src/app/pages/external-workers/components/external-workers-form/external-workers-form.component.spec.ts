import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalWorkersFormComponent } from './external-workers-form.component';

describe('ExternalWorkersFormComponent', () => {
  let component: ExternalWorkersFormComponent;
  let fixture: ComponentFixture<ExternalWorkersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalWorkersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalWorkersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
