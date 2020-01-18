import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SdetailDataSource, SdetailItem, EXAMPLE_DATA } from './sdetail-datasource';
import { ngxCsv } from 'ngx-csv';

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
    'saadhar'];
  onExport() {
    new ngxCsv(EXAMPLE_DATA, 'StudentReport');
  }
  ngOnInit() {
    this.dataSource = new SdetailDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
