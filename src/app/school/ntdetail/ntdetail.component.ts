import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { NtdetailDataSource, NtdetailItem } from './ntdetail-datasource';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-ntdetail',
  templateUrl: './ntdetail.component.html',
  styleUrls: ['./ntdetail.component.css']
})
export class NtdetailComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<NtdetailItem>;
  dataSource: NtdetailDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ntfname', 'ntlname','ntqual','ntdob','ntsex','ntaddr','ntdoj','ntphone','ntaadhar'];

  ngOnInit() {
    this.dataSource = new NtdetailDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
