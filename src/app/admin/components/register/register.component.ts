import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Entry, EntryService, Type } from 'src/app/shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  entryId: string;
  hours: string[];
  minutes: string[];
  local: string;
  types: Type[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private entryService: EntryService
  ) {}

  ngOnInit(): void {
    this.entryId = this.route.snapshot.paramMap.get('lancamentoId')
    this.generateForm();
    this.hours = this.generateListNumbers(0, 23)
    this.minutes = this.generateListNumbers(0, 59)
    this.types = [
      Type.ENTRY_WORK,
      Type.ENTRY_LUNCH,
      Type.EXIT_LUNCH,
      Type.EXIT_WORK
    ]

    if(this.entryId) {
      this.getDataEntry();
    }

  }

  generateForm() {
    this.form = this.fb.group({
      data: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      horas: ['', [Validators.required]],
      minutos: ['', [Validators.required]],
    })
  }

  getDataEntry() {
    this.entryService.getEntryById(this.entryId).subscribe({
      next:(value) => {
        const data = value.data.data
        this.form.get('data').setValue(data.substr(0, 10))
        this.form.get('horas').setValue(data.substr(11, 2))
        this.form.get('minutos').setValue(data.substr(14, 2))
        this.form.get('tipo').setValue(value.data.tipo)
        this.local = value.data.localizacao
      },
      error:(err) => {
        const message = 'Erro ao obter os dados de lançamento.';   
        this.snackBar.open(message, 'Erro', {duration:5000})
        this.router.navigate(['/admin'])
      },
    })
  }


  generateListNumbers(init: number, finish: number) {
    const numbers: string[] = Array();
    for(let i = init; i <= finish; i++) {
      let number: string = i.toString()
      if(i < 10){
        number = `0${number}`;
      }
      numbers.push(number)
    }
    return numbers;
  }

  register() {
    this.entryId ? this.updateDataEntry() : this.registerNewDataEntry();
  }

  registerNewDataEntry() {
    if(this.form.invalid) return;

    const data = this.form.value;
    this.entryService.add(this.getEntryBody(data)).subscribe({
      next:(data) => {
        const message = 'Lançamento cadastrado com sucesso.'
        this.snackBar.open(message, 'Sucesso', {duration:5000})
        this.router.navigate(['/admin'])
      },
      error:(err) => {
        let message = 'Tente novamente em instantes.';
        if(err.status == 400){
          message = err.error.errors.join(' ');
        }
        this.snackBar.open(message, 'Erro', {duration:5000})
      },
    })
  }

  updateDataEntry() {
    if(this.form.invalid) return;

    const data = this.form.value;
    
    this.entryService.update(this.getEntryBody(data)).subscribe({
      next:(data) => {
        const message = 'Lançamento cadastrado com sucesso.'
        this.snackBar.open(message, 'Sucesso', {duration:5000})
        this.router.navigate(['/admin'])
      },
      error:(err) => {
        let message = 'Tente novamente em instantes.';
        if(err.status == 400){
          message = err.error.errors.join(' ');
        }
        this.snackBar.open(message, 'Erro', {duration:5000})
      },
    })
  }

  getEntryBody(datas: any): Entry {
    const data = moment(datas.data)
    data.set({
      hour: datas.horas,
      minute: datas.minutos,
      second: 0
    })

    if(this.entryId){
      return new Entry(
        data.format('YYYY-MM-DD HH:mm:ss'),
        datas.tipo,
        this.local,
        this.employeeId,
        this.entryId
      )
    } else {
      return new Entry(
        data.format('YYYY-MM-DD HH:mm:ss'),
        datas.tipo,
        '',
        this.employeeId,
      )
    }
  }

  get employeeId() {
    return sessionStorage['funcionarioId'];
  }

}
