import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { InformationSystemsFormComponent } from './components/information-systems-form/information-systems-form.component';
import { InformationSystemsViewComponent } from './components/information-systems-view/information-systems-view.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { InformationSystemsRoutingModule } from './information-systems-routing.module';



@NgModule({
  declarations: [
    InformationSystemsFormComponent,
    InformationSystemsViewComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    InformationSystemsRoutingModule
  ]
})
export class InformationSystemsModule { }
