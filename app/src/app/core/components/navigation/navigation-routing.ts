import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

export const sideNavigationPath = '';

export const navigationRoutes: Routes = [
  {
    path: 'students',
    loadChildren: () =>
      import('../../../pages/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('../../../pages/charts/charts.module').then((m) => m.ChartsModule),
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full',
  },
];

@Injectable({ providedIn: 'root' })
export class NavigationRoutingService {
  constructor() {}
}
