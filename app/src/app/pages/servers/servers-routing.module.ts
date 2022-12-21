import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerTableComponent } from './components/server-table/server-table.component';

const routes: Routes = [
  {
    path: 'servers',
    component: ServerTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
