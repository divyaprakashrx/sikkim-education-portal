import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface NtdetailItem {
  ntfname: string;
  ntlname: string;
  ntqual: string;
  ntdob: string;
  ntsex: string;
  ntaddr: string;
  ntdoj: string;
  ntphone: string;
  ntaadhar: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: NtdetailItem[] = [
  {
    ntfname: 'string',
    ntlname: 'string',
    ntqual: 'string',
    ntdob: 'string',
    ntsex: 'string',
    ntaddr: 'strin',
    ntdoj: 'stri',
    ntphone: 'string',
    ntaadhar: 'string',}
];

/**
 * Data source for the Ntdetail view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class NtdetailDataSource extends DataSource<NtdetailItem> {
  data: NtdetailItem[] = EXAMPLE_DATA;
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
  connect(): Observable<NtdetailItem[]> {
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
  private getPagedData(data: NtdetailItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: NtdetailItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'ntfname': return compare(a.ntfname, b.ntfname, isAsc);
        case 'ntlname': return compare(a.ntlname, b.ntlname, isAsc);
        case 'ntqual': return compare(a.ntqual, b.ntqual, isAsc);
        case 'ntdob': return compare(a.ntdob, b.ntdob, isAsc);
        case 'ntsex': return compare(a.ntsex, b.ntsex, isAsc);
        case 'ntaddr': return compare(a.ntaddr, b.ntaddr, isAsc);
        case 'ntdoj': return compare(a.ntdoj, b.ntdoj, isAsc);
        case 'ntphone': return compare(a.ntphone, b.ntphone, isAsc);
        case 'ntaadhar': return compare(a.ntaadhar, b.ntaadhar, isAsc);
        
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
