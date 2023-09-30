import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SystemManagementComponent } from '../shared/utils/component/System-Management/component/system-management/system-management.component';


const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'SystemManagement',
        component: SystemManagementComponent,
        children: [
          { path: 'subruta1', component: SystemManagementComponent  },
          // Agrega más rutas hijas según sea necesario
        ]
      }
    ];

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule { }

