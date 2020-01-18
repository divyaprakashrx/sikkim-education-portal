import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NtdetailDataSource, NtdetailItem, EXAMPLE_DATA } from './ntdetail-datasource';
import { ngxCsv } from 'ngx-csv';



@Component({
  selector: 'app-ntdetail',
  templateUrl: './ntdetail.component.html',
  styleUrls: ['./ntdetail.component.css']
})
export class NtdetailComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<NtdetailItem>;
  dataSource: NtdetailDataSource;
  dat = new MatTableDataSource(EXAMPLE_DATA);

  applyFilter(filterValue: string) {
    this.dat.filter = filterValue.trim().toLowerCase();
  }
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
    new ngxCsv(EXAMPLE_DATA, 'StudentReport');
  }
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    
  }
 
  
}

