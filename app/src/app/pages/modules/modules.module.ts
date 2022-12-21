import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesFormComponent } from './components/modules-form/modules-form.component';
import { ModulesViewComponent } from './components/modules-view/modules-view.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { MaterialModule } from '../../shared/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ModulesRoutingModule } from './modules-routing.module';



@NgModule({
  declarations: [
    ModulesFormComponent,
    ModulesViewComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
