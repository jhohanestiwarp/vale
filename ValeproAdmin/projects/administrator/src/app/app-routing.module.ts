import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  // {
  //   path: '/dashboard',
  //   loadChildren: () =>
  //     import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  // },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
  ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
