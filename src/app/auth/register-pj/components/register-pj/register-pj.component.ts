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

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private registerPjService: RegisterPjService
  ) { }

  ngOnInit(): void {
    this.generateForm();
  }
  
  generateForm() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required, CnpjValidator]],
    });
  }

  register() {
    if (this.form.invalid) {
      return;
    }
    
    const data: RegistrationPj = new RegistrationPj('', '', '', '', '', '', '');
    Object.assign(data, this.form.value);
    
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
