import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalWorkersViewComponent } from './components/external-workers-view/external-workers-view.component';
import { ExternalWorkersFormComponent } from './components/external-workers-form/external-workers-form.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { PaginatePipe } from './pipes/paginate.pipe';
import { ExternalWorkersRoutingModule } from './external-workers-routing.module';

@NgModule({
  declarations: [
    ExternalWorkersViewComponent,
    ExternalWorkersFormComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    ExternalWorkersRoutingModule
  ]
})

export class ExternalWorkersModule { }
