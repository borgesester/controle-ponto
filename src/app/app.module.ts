import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginModule, LoginRoutingModule } from './auth/login';
import { RegisterPjRoutingModule } from './auth/register-pj/register-pj-routing.module';
import { RegisterPjModule } from './auth/register-pj';
import { RegisterPfRoutingModule } from './auth/register-pf/register-pf-routing.module';
import { RegisterPfModule } from './auth/register-pf';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeModule, EmployeeRoutingModule } from './employee';
import { AdminModule, AdminRoutingModule } from './admin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LoginModule,
    LoginRoutingModule,
    RegisterPjModule,
    RegisterPjRoutingModule,
    RegisterPfModule,
    RegisterPfRoutingModule,
    EmployeeModule,
    EmployeeRoutingModule,
    AdminModule,
    AdminRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
