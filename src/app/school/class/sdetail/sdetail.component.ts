import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SdetailDataSource, SdetailItem } from './sdetail-datasource';

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
    'semail',
    'saddr',
    'sdob',
    'squal',
    'ssex',
    'ssid',
    'sdoj',
    'ssub',
    'sclass',
    'sccode',
    'sphone',
    'saadhar',
    'sacname'];

  ngOnInit() {
    this.dataSource = new SdetailDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
