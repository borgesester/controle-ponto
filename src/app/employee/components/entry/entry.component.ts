import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Entry, EntryService, HttpUtilService, Type } from 'src/app/shared/';

declare var navigator: any;
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  currentDateEn: string;
  currentDate: string;
  geoLocation: string;
  lastEntryType: string;
  constructor(
    private entryService: EntryService,
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentDate = moment().format('DD/MM/YYYY HH:mm:ss');
    this.currentDateEn = moment().format('YYYY-MM-DD HH:mm:ss');
    this.getLocation();
    this.lastEntryType = '';
    this.getLastEntryType();
    
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.geoLocation = `${position.coords.latitude}, ${position.coords.longitude}`;
      });
    } 
    return '';
  }

  initWork() {
    this.add(Type.ENTRY_WORK);
  }

  finishWork() {
    this.add(Type.EXIT_WORK);
  }

  initLunch() {
    this.add(Type.ENTRY_LUNCH);
  }

  finishLunch() {
    this.add(Type.EXIT_LUNCH);
  }

  getLastEntryType() {
    this.entryService.getLastEntry().subscribe({
      next:(data) => {
        this.lastEntryType = data.data ? data.data.tipo : ''; 
      },
      error:(err) => {
        const message = 'Erro ao obter último lançamento';
        this.snackBar.open(message, "Erro", {duration: 5000});
      },
    })
  }

  add(type: string) {
    const entry = new Entry(
      this.currentDateEn,
      type,
      this.geoLocation,
      this.httpUtil.getUserId()
    )

    this.entryService.add(entry).subscribe({
      next:(value) => {        
        const message = 'Lançamento realizado com sucesso!';
        this.snackBar.open(message, "Sucesso", {duration: 5000});
        this.router.navigate(['/funcionario/listagem']);
      },
      error:(err) =>  {
        let message = "Tente novamente em instantes.";
        if(err.status == 400) {
          message = err.error.errors.join(' ');
        }
        this.snackBar.open(message, "Erro", {duration: 5000})
      },
    })
  }

  getUrlMaps() {
    return 'https://www.google.com/maps/search/?api=1&query=' +
      this.getLocation();
  }

  showInitWork() {
    return this.lastEntryType === '' ||
      this.lastEntryType === Type.EXIT_WORK;
      
  }

  showFinishWork() {
    return this.lastEntryType === '' ||
      this.lastEntryType === Type.EXIT_LUNCH || this.lastEntryType === 'TERMINO_PAUSA';
  }

  showInitLunch() {
    return this.lastEntryType === '' ||
      this.lastEntryType === Type.ENTRY_WORK;
  }

  showFinishLunch() {
    return this.lastEntryType === '' ||
      this.lastEntryType === Type.ENTRY_LUNCH || this.lastEntryType === 'INICIO_PAUSA';
  }
}
