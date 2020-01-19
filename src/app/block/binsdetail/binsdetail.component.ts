import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BinsdetailDataSource, BinsdetailItem, EXAMPLE_DATA } from './binsdetail-datasource';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ngxCsv } from 'ngx-csv';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Component({
  selector: 'app-binsdetail',
  templateUrl: './binsdetail.component.html',
  styleUrls: ['./binsdetail.component.css']
})
export class BinsdetailComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<BinsdetailItem>;
  dataSource: BinsdetailDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name',
    'schallot',
    'sex',
    'qual',
    'email',
    'adata',
    'fund',
    'dist',
    'block',
    'doi',
    'status'
  ];
  onExport() {
    new ngxCsv(EXAMPLE_DATA, 'INSPECTION REPORT');
  }
  ngOnInit() {
    this.dataSource = new BinsdetailDataSource();
  }
  constructor(private InspectionDetails: AngularFireDatabase) { }
  inspectiondetail: AngularFireList<any>;

  getForm() {
    this.inspectiondetail = this.InspectionDetails.list('inspectiondetails');
    return this.inspectiondetail.snapshotChanges();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onSubmit(form: NgForm) {
    EXAMPLE_DATA.push(form.value);
    this.getForm();
    this.inspectiondetail.push(form.value);
  }
}
