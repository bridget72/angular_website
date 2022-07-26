import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    // since we have two blank paths now 
    pathMatch:'full'
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    // for lazy loading
    path:'projects',
    loadChildren:() => import('./projects/projects.module').then(x => x.ProjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
