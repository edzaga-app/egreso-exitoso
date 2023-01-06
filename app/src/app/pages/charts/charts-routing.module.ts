import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsViewComponent } from './components/charts-view/charts-view.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
