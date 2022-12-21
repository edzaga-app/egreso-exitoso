import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExternalWorkersViewComponent } from "./components/external-workers-view/external-workers-view.component";

const routes: Routes = [
  {
    path: 'external-workers',
    component: ExternalWorkersViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalWorkersRoutingModule { }
