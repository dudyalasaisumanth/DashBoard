import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ManagerComponent } from './manager/manager.component';
import { BackgroundComponent } from './background/background.component';



const routes: Routes = [
  // ,canActivate:[AuthGuard]
  {path:'',redirectTo:'login',pathMatch:"full"},
  {path:'home',component:HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'ManagerDetails',component:ManagerDetailsComponent},
  {path:"manager" , component:ManagerComponent},
  {path:"background" , component:BackgroundComponent}
  // {
  //   path: 'home',
    
  //   children: [
  //     { path: '', redirectTo: 'login', pathMatch: 'full' },
  //     { path: 'login', component: LoginComponent},
  //     { path:'home', component:HomeComponent}
  //   ]
  // }
  // { path:"home",component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
