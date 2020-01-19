import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SattendDataSource, SattendItem, EXAMPLE_DATA } from './sattend-datasource';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ngxCsv } from 'ngx-csv';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-sattend',
  templateUrl: './sattend.component.html',
  styleUrls: ['./sattend.component.css']
})
export class SattendComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<SattendItem>;
  dataSource: SattendDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'id', 'class'];

  constructor(private Attendance: AngularFireDatabase) { }
  attendance: AngularFireList<any>;

  onExport() {
    new ngxCsv(EXAMPLE_DATA, 'StudentReport');
  }

  getdetail() {
    this.attendance = this.Attendance.list('attendance');
    return this.attendance.snapshotChanges();
  }
  ngOnInit() {
    this.dataSource = new SattendDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onSubmit(form: NgForm) {
    EXAMPLE_DATA.push(form.value);
    this.attendance.push(form.value);
  }
}
