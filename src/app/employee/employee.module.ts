import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './components';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { EntryService, HttpUtilService, PtBrMatPaginatorIntl, SharedModule } from '../shared';



@NgModule({
  declarations: [
    EntryComponent,
    ListComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    SharedModule
    
  ],
  providers: [
    HttpUtilService,
    EntryService,
    {
      provide: MatPaginatorIntl, 
      useClass: PtBrMatPaginatorIntl
    }
  ]
})
export class EmployeeModule { }
