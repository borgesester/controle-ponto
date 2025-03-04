import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee, EmployeeService, Entry, EntryService, HttpUtilService } from 'src/app/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  dataSource: MatTableDataSource<Entry>
  cols: string[] = ['data', 'tipo', 'local', 'acao'];
  employeeId: string;
  totalEntry: number;

  private page: number;
  private order: string;
  private direction: string;

  employees: Employee[];

  @ViewChild(MatSelect, {static:true}) matSelect: MatSelect
  form: FormGroup;

  

  constructor(
    private entryService: EntryService,
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.page = 0;
    this.defaultOrder();
    this.getEmployees();
    this.generateForm();
  }

  generateForm() {
    this.form = this.fb.group({
      employee: ['', []]
    })
  }

  defaultOrder() {
    this.order = 'data',
    this.direction = 'DESC'    
  }

  get empId () {
    return sessionStorage['funcionarioId'] || false;
  }

  getEmployees() {
    this.employeeService.listEmpByEmploy().subscribe({
      next:(data) =>  {
        const userId = this.httpUtil.getUserId();
        this.employees = (data.data as Employee[]).filter(
          emp => emp.id != userId
        );        

        if(this.empId) {
          this.form.get('employee').setValue(parseInt(this.empId, 10));
          this.showEntry();
        }
      },
      error: (err) => {
        const message = 'Erro ao obter funcionários.'
        this.snackBar.open(message, 'Erro', {duration: 5000})
      }
    })
  }

  showEntry() {
    if(this.matSelect.selected){      
      this.employeeId = this.matSelect.selected['value'];      
    } else if(this.empId){
      this.employeeId = this.empId
    } else {
      return;
    }
    sessionStorage['funcionarioId'] = this.employeeId;

    this.entryService.listEntryByEmployee(this.employeeId, this.page, this.order, this.direction).subscribe({
      next:(data) =>  {        
        this.totalEntry = data['data'].totalElements;
        
        const entry = data['data'].content as Entry[];
        
        this.dataSource = new MatTableDataSource<Entry>(entry);
      },
      error:(err) => {
        const message = 'Erro ao obter lançamentos.';
        this.snackBar.open(message, 'Erro', {duration: 5000})
      },
    })
  }

  showDialog(entryId: string) {
    const dialog = this.dialog.open(ConfirmDialog, {});
    dialog.afterClosed().subscribe(del => {
      if(del) {
        this.deleteEntry(entryId);
      }
    })
  }

  deleteEntry(entryId: string) {
    this.entryService.deleteEntry(entryId).subscribe({
      next:(data) => {
        const message = 'Lançamento removido com sucesso!'
        this.snackBar.open(message, 'Sucesso', {duration: 5000})
        this.showEntry();
      },
      error:(err) => {
        let message = 'Tente novamente em instantes.';
        if(err.status == 400) {
          message = err.error.errors.join(' ');
        }
        this.snackBar.open(message, 'Erro', {duration: 5000})
      },
    })
  }

  paginate(pe: PageEvent) {
    this.page = pe.pageIndex;
    this.showEntry();
  }

  ordenate(sort: Sort) {
    if(sort.direction == ''){
      this.defaultOrder();
    } else {
      this.order = sort.active; 
      this.direction = sort.direction.toUpperCase(); 
    }
    this.showEntry()
  }


}

@Component({
  selector: 'confirm-dialog',
  template: `
    <h1 mat-dialog-title>Deseja realmente remover o lançamento?</h1>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" tabindex="-1">Não</button>
      <button mat-button [mat-dialog-close]="true" tabindex="2">Sim</button>
    </div>
  `
})

export class ConfirmDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}