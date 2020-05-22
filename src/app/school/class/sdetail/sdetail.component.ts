import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SdetailDataSource, SdetailItem, EXAMPLE_DATA } from './sdetail-datasource';
import { ngxCsv } from 'ngx-csv';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-sdetail',
  templateUrl: './sdetail.component.html',
  styleUrls: ['./sdetail.component.css']
})
export class SdetailComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<SdetailItem>;
  dataSource: SdetailDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['sfname',
    'slname',
    'sffname',
    'sflname',
    'smfname',
    'smlname',
    'semail',
    'saddr',
    'sdob',
    'ssex',
    'ssid',
    'sclass',
    'sccode',
    'sphone',
    'saadhar',
    'age',
    'weight',
    'eye',
  'diseases'];
  onExport() {
    new ngxCsv(EXAMPLE_DATA, 'StudentReport');
  }
  ngOnInit() {
    this.dataSource = new SdetailDataSource();
  }
  constructor(private StudentDetails: AngularFireDatabase) { }
  sdetail: AngularFireList<any>;

  getForm() {
    this.sdetail = this.StudentDetails.list('student/I');
    return this.sdetail.snapshotChanges();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onSubmit(form: NgForm) {
    EXAMPLE_DATA.push(form.value);
    this.getForm();
    this.sdetail.push(form.value);
  }

}
