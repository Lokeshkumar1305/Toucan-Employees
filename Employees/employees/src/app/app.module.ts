import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { EmployeesRegistrationComponent } from './Pages/employees-registration/employees-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeLoginComponent } from './Pages/employee-login/employee-login.component';
import { HomeComponent } from './Pages/home/home.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesRegistrationComponent,
    EmployeeLoginComponent,
    HomeComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MaterialModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
