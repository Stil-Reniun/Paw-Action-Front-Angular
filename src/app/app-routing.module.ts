import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Pages/index/index.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { AdminIndexComponent } from './Pages/Admin/admin-index/admin-index.component';
import { SliderbarComponent } from './Pages/Admin/sliderbar/sliderbar.component';
import { PerfilComponent } from './Pages/Admin/perfil/perfil.component';
import { UsersComponent } from './Pages/Admin/users/users.component';
import { NavsComponent } from './Pages/Users/navs/navs.component';
import { UsersIndexComponent } from './Pages/Users/users-index/users-index.component';

const routes: Routes = [
  {path: '' , component: IndexComponent, pathMatch: 'full'},
  {path : 'login', component : LoginComponent,pathMatch : 'full'},
  {path : 'signup', component : SignupComponent,pathMatch : 'full'},



  {path : 'admin' , component: DashboardComponent,
      children:[
        {path : '', component : AdminIndexComponent},
        {path : 'sliderbar', component : SliderbarComponent},
        {path : 'perfil', component : PerfilComponent},
        {path : 'view-users', component : UsersComponent},
      ]},

  {path: 'user', component: NavsComponent,
      children:[
        {path : '', component : UsersIndexComponent},
      ]},

  { path: '**', component: PageNotFoundComponent,pathMatch : 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
