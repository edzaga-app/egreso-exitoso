import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ExternalWorkersModule } from 'src/app/pages/external-workers/external-workers.module';
import { EnterpriseModule } from 'src/app/pages/enterprise/enterprise.module';
import { ModulesModule } from 'src/app/pages/modules/modules.module';
import { InformationSystemsModule } from 'src/app/pages/information-systems/information-systems.module';
import { ServersModule } from 'src/app/pages/servers/servers.module';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ExternalWorkersModule,
    EnterpriseModule,
    ModulesModule,
    InformationSystemsModule,
    ServersModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
