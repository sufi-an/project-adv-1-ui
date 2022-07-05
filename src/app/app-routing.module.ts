import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningRoutesComponent } from './components/learning-routes/learning-routes.component';
import { NewTestComponent } from './components/new-test/new-test.component';

const routes: Routes = [
  {
    path:"contact",
    component: LearningRoutesComponent
  },
  {
    path:"header",
    loadChildren: ()=>import ('./components/header/header.module').then(m=>m.HeaderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
