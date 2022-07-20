import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { RouteAComponent } from './route-a/route-a.component';

const routes: Routes = [
  {
    path:'',
    component:ContactUsComponent,
  },
  {
    path:'route-a',
    component:RouteAComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
