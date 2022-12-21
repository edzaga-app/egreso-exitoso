import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InformationSystemsViewComponent } from "./components/information-systems-view/information-systems-view.component";


const routes: Routes = [
  {
    path: 'information-systems',
    component: InformationSystemsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationSystemsRoutingModule { }
