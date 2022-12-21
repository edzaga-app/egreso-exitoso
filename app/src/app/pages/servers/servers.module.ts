import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { ServerFormComponent } from './components/server-form/server-form.component';
import { ServerTableComponent } from './components/server-table/server-table.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    ServerFormComponent,
    ServerTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ServersRoutingModule
  ],
  exports: [
    ServersRoutingModule
  ]
})
export class ServersModule { }
