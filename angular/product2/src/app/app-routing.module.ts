import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddprodutsComponent } from './addproduts/addproduts.component';

const routes: Routes = [
{path:'',component:ProductsComponent},
{path:'addproduct', component:AddprodutsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
