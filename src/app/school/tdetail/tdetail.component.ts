import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TdetailDataSource, TdetailItem, EXAMPLE_DATA } from './tdetail-datasource';
import { ngxCsv } from 'ngx-csv';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Component({
  selector: 'app-tdetail',
  templateUrl: './tdetail.component.html',
  styleUrls: ['./tdetail.component.css']
})
export class TdetailComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<TdetailItem>;
  dataSource: TdetailDataSource;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tfname',
    'tlname',
    'temail',
    'taddr',
    'tdob',
    'tqual',
    'tsex',
    'tsid',
    'tdoj',
    'tsub',
    'tclass',
    'tccode',
    'tphone',
    'taadhar',
    'tacname'];
  onExport() {
    new ngxCsv(EXAMPLE_DATA, 'Teacher Details');
  }
  ngOnInit() {
    this.dataSource = new TdetailDataSource();

  }
  constructor(private TeacherDetails: AngularFireDatabase) { }
  tdetail: AngularFireList<any>;

  getForm() {
    this.tdetail = this.TeacherDetails.list('tdetails');
    return this.tdetail.snapshotChanges();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    EXAMPLE_DATA.push(form.value);
    this.getForm();
    this.tdetail.push(form.value);
  }
  
}

