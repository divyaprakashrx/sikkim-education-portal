import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';


// TODO: Replace this with your own data model type
export interface ExamItem {
  sfname: string;
  slname: string;
  sid: string;
  maths: string;
  physics: string;
  chemistry: string;
  biology: string;
  history: string;
  geography: string;
  civics: string;
  economics: string;
  english: string;
  hindi: string;
}

// TODO: replace this with real data from your application
export var EXAMPLE_DATA: ExamItem[] = [
  { sfname: 'Anamika', slname: 'jain', sid: '890', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anamika', slname: 'raj', sid: '891', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anamika', slname: 'singh', sid: '893', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Madhu', slname: 'kumari', sid: '983', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anamika', slname: 'prakash', sid: '783', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Aaroohi', slname: 'priyadarshi', sid: '803', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Aastha', slname: 'suman', sid: '703', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anamika', slname: 'pandey', sid: '103', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anshu', slname: 'sinha', sid: '237', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anshu', slname: 'pandey', sid: '939', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anshu', slname: 'singh', sid: '201', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anshu', slname: 'kumari', sid: '205', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anshu', slname: 'raj', sid: '963', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Anshu', slname: 'sinha', sid: '783', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Bhaskar', slname: 'sinha', sid: '583', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Bhaskar', slname: 'singh', sid: '678', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Divya', slname: 'prakash', sid: '723', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: 'Divya', slname: 'bharti', sid: '623', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'asame', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'safse', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'eqrame', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
  { sfname: '001', slname: 'sfname', sid: '003', maths: '004', physics: '005', chemistry: '006', biology: '007', history: '008', geography: '009', civics: '010', economics: '011', english: '012', hindi: '013'},
];

/**
 * Data source for the Exam view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ExamDataSource extends DataSource<ExamItem> {
  data: ExamItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  dat = new MatTableDataSource(EXAMPLE_DATA);

  applyFilter(filterValue: string) {
    this.dat.filter = filterValue.trim().toLowerCase();
  }
  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ExamItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ExamItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ExamItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'sfname': return compare(a.sfname, b.sfname, isAsc);
        case 'slname': return compare(a.slname, b.slname, isAsc);
        case 'sid': return compare(a.sid, b.sid, isAsc);
        case 'maths': return compare(a.maths, b.maths, isAsc);
        case 'physics': return compare(a.physics, b.physics, isAsc);
        case 'chemistry': return compare(a.chemistry, b.chemistry, isAsc);
        case 'biology': return compare(a.biology, b.biology, isAsc);
        case 'history': return compare(a.history, b.history, isAsc);
        case 'geography': return compare(a.geography, b.geography, isAsc);
        case 'civics': return compare(a.civics, b.civics, isAsc);
        case 'economics': return compare(a.economics, b.economics, isAsc);
        case 'english': return compare(a.english, b.english, isAsc);
        case 'hindi': return compare(a.hindi, b.hindi, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
