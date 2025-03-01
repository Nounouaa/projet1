import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Controller/home/home.component';
import { ProduitsComponent } from './Controller/produits/produits.component';

const routes: Routes = [
  {path:"",component : HomeComponent},
  {path:"produits",component : ProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
