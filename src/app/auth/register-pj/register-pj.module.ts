import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPjComponent } from './components/register-pj';
import { RouterModule } from '@angular/router';
import { RegistrationPjComponent } from './components/registration-pj.component';



@NgModule({
  declarations: [
    RegisterPjComponent,
    RegistrationPjComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class RegisterPjModule { }
