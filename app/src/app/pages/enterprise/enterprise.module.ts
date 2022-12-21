import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { EnterpriseFormComponent } from './components/enterprise-form/enterprise-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EnterpriseViewComponent } from './components/enterprise-view/enterprise-view.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatePipe } from './pipes/paginate.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EnterpriseFormComponent,
    EnterpriseViewComponent,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    EnterpriseRoutingModule
  ]
})
export class EnterpriseModule { }
