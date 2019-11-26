import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { PhoneComponent } from './contact/phone/phone.component';
import { UsersComponent } from './users/users.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [{path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent,children:[{path:'phone',component:PhoneComponent}]},
  {path:'users',component:UsersComponent},
  {path:'student',component:StudentsComponent},
  {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }