import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPjComponent } from './components/register-pj';
import { RouterModule } from '@angular/router';
import { RegistrationPjComponent } from './components/registration-pj.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPjService } from './services';
import { RegisterUserModule } from 'src/app/components/register-user';



@NgModule({
  declarations: [
    RegisterPjComponent,
    RegistrationPjComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RegisterUserModule,
  ],
  providers: [
    RegisterPjService
  ]
})
export class RegisterPjModule { }
