import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseViewComponent } from './components/enterprise-view/enterprise-view.component';

const routes: Routes = [
  {
    path: 'enterprises',
    component: EnterpriseViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
