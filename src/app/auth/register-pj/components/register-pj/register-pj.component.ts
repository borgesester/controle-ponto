import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegistrationPj } from '../../models';
import { CnpjValidator, CpfValidator } from 'src/app/shared';
import { RegisterPjService } from '../../services';

@Component({
  selector: 'app-register-pj',
  templateUrl: './register-pj.component.html',
  styleUrls: ['./register-pj.component.scss']
})
export class RegisterPjComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private registerPjService: RegisterPjService
  ) { }

  ngOnInit(): void {
  }
  
  

  register(form: FormGroup) {
    console.log(form);
    const data: RegistrationPj = new RegistrationPj('', '', '', '', '', '', '');
    Object.assign(data, form.value);
    
    this.registerPjService.registerPj(data).subscribe(
      {
        next: (datResponse) => {
          console.log(datResponse);
          const message = 'Realize o login para acessar o sistema.';
          this.snackBar.open(message, 'Sucesso', { duration: 5000 });
          this.router.navigate(['/login']);
        },
        error: (err) => {
          let message = 'Tente novamente em instantes.';
          if (err.status === 400) {
            message = err.error.errors.join(' ');
          }
          this.snackBar.open(message, 'Erro', { duration: 3000 });
        },
      }
    );
  }



}
