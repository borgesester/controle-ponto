import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPjComponent } from './components/register-pj';
import { RouterModule } from '@angular/router';
import { RegistrationPjComponent } from './components/registration-pj.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared';
import { RegisterPjService } from './services';



@NgModule({
  declarations: [
    RegisterPjComponent,
    RegistrationPjComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [
    RegisterPjService
  ]
})
export class RegisterPjModule { }
