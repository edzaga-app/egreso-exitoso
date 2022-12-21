import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingViewComponent } from './components/testing-view/testing-view.component';

const routes: Routes = [
  {
    path: 'testing',
    component: TestingViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
