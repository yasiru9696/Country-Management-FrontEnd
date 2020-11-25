import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReadcountryComponent } from './readcountry/readcountry.component';
import { UpdateCountryComponent } from './updateCountry/updateCountry.component';
import { DeleteCountryComponent } from './deleteCountry/deleteCountry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewCountryComponent } from './view-country/view-country.component';
import {CountryService} from './service/country.service';
import { ManageCountryComponent } from './manage-country/manage-country.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ReadcountryComponent,
    UpdateCountryComponent,
    DeleteCountryComponent,
    ViewCountryComponent,
    ManageCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],

  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
