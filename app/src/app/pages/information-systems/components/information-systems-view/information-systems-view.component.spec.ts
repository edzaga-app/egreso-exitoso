import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSystemsViewComponent } from './information-systems-view.component';

describe('InformationSystemsViewComponent', () => {
  let component: InformationSystemsViewComponent;
  let fixture: ComponentFixture<InformationSystemsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationSystemsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationSystemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
