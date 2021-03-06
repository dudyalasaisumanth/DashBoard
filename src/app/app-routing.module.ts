import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ManagerComponent } from './manager/manager.component';
import { BackgroundComponent } from './background/background.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  // ,canActivate:[AuthGuard]
  {path:'',redirectTo:'login',pathMatch:"full"},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard] },
  {path:'login',component:LoginComponent},
  {path:'ManagerDetails',component:ManagerDetailsComponent,canActivate:[AuthGuard]},
  {path:"manager" , component:ManagerComponent,canActivate:[AuthGuard]},
  {path:"background" , component:BackgroundComponent,canActivate:[AuthGuard]},
  {path:"details",component:AdminComponent}
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
