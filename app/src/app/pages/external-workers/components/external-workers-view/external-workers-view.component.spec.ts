import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalWorkersViewComponent } from './external-workers-view.component';

describe('ExternalWorkersViewComponent', () => {
  let component: ExternalWorkersViewComponent;
  let fixture: ComponentFixture<ExternalWorkersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalWorkersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalWorkersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
