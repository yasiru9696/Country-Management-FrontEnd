import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewCountryComponent} from './view-country/view-country.component';
import {ManageCountryComponent} from './manage-country/manage-country.component';

const routes: Routes = [
  {path : '', component: ViewCountryComponent},
  {path : 'newcountry', component: ManageCountryComponent},
  {path : 'newcountry/:id', component: ManageCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
