import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesRegistrationComponent } from './Pages/employees-registration/employees-registration.component';
import { EmployeeLoginComponent } from './Pages/employee-login/employee-login.component';
import { HomeComponent } from './Pages/home/home.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'employee-login',component:EmployeeLoginComponent},
  {path:'employees-registration',component:EmployeesRegistrationComponent},
  {path:'landing-page',component:LandingPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent,EmployeesRegistrationComponent,EmployeeLoginComponent,LandingPageComponent]
