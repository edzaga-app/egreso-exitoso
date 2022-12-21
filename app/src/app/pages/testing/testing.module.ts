import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingViewComponent } from './components/testing-view/testing-view.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    TestingViewComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    MaterialModule
  ],
  exports: [
    TestingViewComponent
  ]
})
export class TestingModule { }
