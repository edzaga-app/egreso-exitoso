import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LogoModule } from '../logo/logo.module';
import { EnterpriseModule } from 'src/app/pages/enterprise/enterprise.module';
import { ExternalWorkersModule } from 'src/app/pages/external-workers/external-workers.module';
import { LayoutModule } from '../layout/layout.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { InformationSystemsModule } from 'src/app/pages/information-systems/information-systems.module';
import { TestingModule } from 'src/app/pages/testing/testing.module';



@NgModule({
  declarations: [
    NavigationComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LogoModule,
    ExternalWorkersModule,
    EnterpriseModule,
    InformationSystemsModule,
    TestingModule,
    LayoutModule,
    LayoutRoutingModule,
  ],
  exports: [
    NavigationComponent,
  ],
})
export class NavigationModule { }
