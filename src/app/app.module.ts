import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTestComponent } from './components/new-test/new-test.component';
import { TestComponent } from './components/test/test.component';
import { LearningRoutesComponent } from './components/learning-routes/learning-routes.component';

@NgModule({
  declarations: [
    AppComponent,
   TestComponent,
   NewTestComponent,
   LearningRoutesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
