import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
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
