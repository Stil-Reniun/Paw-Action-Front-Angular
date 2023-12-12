import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SignupComponent } from './Pages/signup/signup.component';
import { LoginComponent } from './Pages/login/login.component';
import { IndexComponent } from './Pages/index/index.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { AdminIndexComponent } from './Pages/Admin/admin-index/admin-index.component';
import { UsersComponent } from './Pages/Admin/users/users.component';
import { SliderbarComponent } from './Pages/Admin/sliderbar/sliderbar.component';
import { PerfilComponent } from './Pages/Admin/perfil/perfil.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { NavsComponent } from './Pages/Users/navs/navs.component';
import { UsersIndexComponent } from './Pages/Users/users-index/users-index.component';
import { UserPerfilComponent } from './Pages/Users/user-perfil/user-perfil.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    IndexComponent,
    PageNotFoundComponent,
    AdminIndexComponent,
    UsersComponent,
    SliderbarComponent,
    PerfilComponent,
    DashboardComponent,
    NavsComponent,
    UsersIndexComponent,
    UserPerfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatTreeModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
