import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule } from '@angular/material';
import { ManagerComponent } from './manager/manager.component';
import { BackgroundComponent } from './background/background.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ManagerComponent,
    BackgroundComponent,
    ManagerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
