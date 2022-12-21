import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModulesViewComponent } from "./components/modules-view/modules-view.component";

const routes: Routes = [
  {
    path: '',
    component: ModulesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
