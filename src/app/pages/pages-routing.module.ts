import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'',
        loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule),

      },
      {
        path:'work',
        loadChildren:()=> import('./work/work.module').then(m=>m.WorkModule),
        
      },
      {
        path:'contact-us',
        loadChildren:()=> import('./contact-us/contact-us.module').then(m=>m.ContactUsModule),
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
