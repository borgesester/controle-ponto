import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPfComponent } from './components/register-pf/register-pf.component';
import { RouterModule } from '@angular/router';
import { RegistrationPfComponent } from './components/';
import { RegisterPfService } from './services';
import { RegisterUserModule } from 'src/app/components/register-user';



@NgModule({
  declarations: [
    RegisterPfComponent,
    RegistrationPfComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RegisterUserModule    
  ],
  providers: [
    RegisterPfService
  ]
})
export class RegisterPfModule { }
