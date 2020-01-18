import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TdetailItem {
  tfname: string,
  tlname: string,
  temail: string,
  taddr: string,
  tdob: string,
  tqual: string,
  tsex: string,
  tsid: string,
  tdoj: string,
  tsub: string,
  tclass: string,
  tccode: string,
  tphone: string,
  taadhar: string,
  tacname: string
}

// TODO: replace this with real data from your application
export var EXAMPLE_DATA: TdetailItem[] = [];

/**
 * Data source for the Tdetail view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TdetailDataSource extends DataSource<TdetailItem> {
  
  data: TdetailItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TdetailItem[]> {
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
  private getPagedData(data: TdetailItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TdetailItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'tfname': return compare(a.tfname, b.tfname, isAsc);
        case 'tlname': return compare(a.tlname, b.tlname, isAsc);
        case 'temail': return compare(a.temail, b.temail, isAsc);
        case 'tsex': return compare(a.tsex, b.tsex, isAsc);
        case 'tsid': return compare(a.tsid, b.tsid, isAsc);
        case 'tdob': return compare(a.tdob, b.tdoj, isAsc);
        case 'tclass': return compare(a.tclass, b.tclass, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
