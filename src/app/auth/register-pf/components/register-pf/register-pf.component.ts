import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CnpjValidator, CpfValidator } from 'src/app/shared';
import { RegistrationPf } from '../../models';
import { RegisterPfService } from '../../services';

@Component({
  selector: 'app-register-pf',
  templateUrl: './register-pf.component.html',
  styleUrls: ['./register-pf.component.scss']
})
export class RegisterPfComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private registerPfService: RegisterPfService
  ) { }

  ngOnInit(): void {
  }

 

  register(form: FormGroup) {

    const data: RegistrationPf = new RegistrationPf('', '', '', '', '', '');
        Object.assign(data, form.value);
        
        this.registerPfService.registerPf(data).subscribe(
          {
            next: (datResponse) => {    
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
