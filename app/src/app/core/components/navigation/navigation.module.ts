import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LogoModule } from '../logo/logo.module';
import { LayoutModule } from '../layout/layout.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { StudentsModule } from '../../../pages/students/students.module';
import { ChartsModule } from '../../../pages/charts/charts.module';

@NgModule({
  declarations: [NavigationComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LogoModule,
    ChartsModule,
    LayoutModule,
    LayoutRoutingModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
