import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entry, EntryService } from 'src/app/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  dataSource: MatTableDataSource<Entry>;
  cols: string[] = ['data', 'tipo', 'local']

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private entryService: EntryService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.entryService.listAllEntry().subscribe({
      next:(data) => {        
        const entry = data['data'] as Entry[];
        this.dataSource = new MatTableDataSource<Entry>(entry)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:(err) => {
        const message = 'Erro ao obter os lançamentos.';
        this.snackBar.open(message, "Erro", {duration: 5000})
      },
    })
  }
}
