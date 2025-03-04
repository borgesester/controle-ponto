import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { updateLocale } from 'moment';
import { CnpjValidator, CpfValidator } from 'src/app/shared';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit{

  form: FormGroup;
  matcher = new ErrorStateMatcherInput();
  @Input() userPJ?: boolean;
  @Output() formUser = new EventEmitter<FormGroup>();

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {    
    this.generateForm();
  }

  generateForm() {
    if(this.userPJ) {
      this.form = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        cpf: ['', [Validators.required, CpfValidator]],
        razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
        cnpj: ['', [Validators.required, CnpjValidator]],
      });
    } else {
      this.form = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        cpf: ['', [Validators.required, CpfValidator]],
        cnpj: ['', [Validators.required, CnpjValidator]],
      });
    }
      
  }

  generateFormUser() {
    if(this.form.invalid) {
      return;
    } else {
      this.formUser.emit(this.form) 
    }
  }

}

export class ErrorStateMatcherInput implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return (control.invalid && (control.dirty || control.touched));
  }
}

