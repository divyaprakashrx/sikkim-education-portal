import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable,MatTableDataSource } from '@angular/material/table';
import { ExamDataSource, ExamItem, EXAMPLE_DATA } from './exam-datasource';
import { ngxCsv } from 'ngx-csv';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ExamItem>;
  dataSource: ExamDataSource;
  dat = new MatTableDataSource(EXAMPLE_DATA);

  applyFilter(filterValue: string) {
    this.dat.filter = filterValue.trim().toLowerCase();
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['sfname',
    'slname',
    'sid',
    'maths',
    'physics',
    'chemistry',
    'biology',
    'history',
    'geography',
    'civics',
    'economics',
    'english',
    'hindi'];

  ngOnInit() {
    this.dataSource = new ExamDataSource();
  }

  onExport() {
    new ngxCsv(EXAMPLE_DATA, 'StudentReport');
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onSubmit(form: NgForm) {
    EXAMPLE_DATA.push(form.value);
  }
}
