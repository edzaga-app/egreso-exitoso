import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [StudentTableComponent],
  imports: [CommonModule, StudentsRoutingModule, MaterialModule],
})
export class StudentsModule {}
