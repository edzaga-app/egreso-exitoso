import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  sideNavigationPath,
  navigationRoutes,
} from './core/components/navigation/navigation-routing';
import { NavigationComponent } from './core/components/navigation/navigation.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: sideNavigationPath,
    component: NavigationComponent,
    children: navigationRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
