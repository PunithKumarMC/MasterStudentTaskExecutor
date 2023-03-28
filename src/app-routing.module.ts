import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MasterComponent } from './master/master.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'home' ,component:HomeComponent},
  {path:'login' ,component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'master',component:MasterComponent},
  {path:'student',component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
