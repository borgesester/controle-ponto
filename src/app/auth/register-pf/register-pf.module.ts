import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPfComponent } from './components/register-pf/register-pf.component';
import { RouterModule } from '@angular/router';
import { RegistrationPfComponent } from './components/';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';
import { RegisterPfService } from './services';



@NgModule({
  declarations: [
    RegisterPfComponent,
    RegistrationPfComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [
    RegisterPfService
  ]
})
export class RegisterPfModule { }
