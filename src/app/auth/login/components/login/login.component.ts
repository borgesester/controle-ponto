import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.generateForm()
  }

  generateForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logon() {
    if (this.form.invalid) {
      this.snackBar.open('Dados inválidos', 'Erro', { duration: 3000 });
      return;
    }
    const login: Login = new Login('', '');
    Object.assign(login, this.form.value);
    
    this.loginService.login(login).subscribe(
      {
        next: (datResponse) => {
          console.log(datResponse);
          localStorage['token'] = datResponse['data']['token'];
          const user = JSON.parse(atob(datResponse['data']['token'].split('.')[1]));

          if (user['role'] === 'ROLE_ADMIN') {
            alert('Admin');
            // this.router.navigate(['/admin']);
          } else {
            alert('Funcionário');
            // this.router.navigate(['/funcionario']);
          }
        },
        error: (err) => {
          let message = 'Tente novamente!';
          if (err.status === 401) {
            message = 'Usuário ou senha inválidos';
          }
          this.snackBar.open(message, 'Erro', { duration: 3000 });
        },
      }
    );
  }

}
