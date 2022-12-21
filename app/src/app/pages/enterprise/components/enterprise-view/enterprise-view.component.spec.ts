import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseViewComponent } from './enterprise-view.component';

describe('EnterpriseViewComponent', () => {
  let component: EnterpriseViewComponent;
  let fixture: ComponentFixture<EnterpriseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
