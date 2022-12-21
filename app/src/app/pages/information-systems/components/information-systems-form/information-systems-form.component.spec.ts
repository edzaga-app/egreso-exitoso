import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSystemsFormComponent } from './information-systems-form.component';

describe('InformationSystemsFormComponent', () => {
  let component: InformationSystemsFormComponent;
  let fixture: ComponentFixture<InformationSystemsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationSystemsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationSystemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
