import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';
import { TemplateComponent } from './template/template.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'react', component:ReactComponent},
  {path:'template',component:TemplateComponent},
  
  {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
