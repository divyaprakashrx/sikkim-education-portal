import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface SdetailItem {
  sfname: string,
  slname: string,
  smfname: string,
  smlname: string,
  sffname: string,
  sflname: string,
  semail: string,
  saddr: string,
  sdob: string,
  ssex: string,
  ssid: string,
  sclass: string,
  sccode: string,
  sphone: string,
  saadhar: string,
}

// TODO: replace this with real data from your application
export var EXAMPLE_DATA: SdetailItem[] = [
  {
    sfname: 'string',
    slname: 'string',
    sffname: 'string',
    sflname: 'string',
    smfname: 'string',
    smlname: 'string',
    semail: 'string',
    saddr: 'string',
    sdob: 'string',
    ssex: 'string',
    ssid: 'string',
    sclass: 'string',
    sccode: 'string',
    sphone: 'string',
    saadhar: 'string',
  },];

/**
 * Data source for the Sdetail view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SdetailDataSource extends DataSource<SdetailItem> {
  data: SdetailItem[] = EXAMPLE_DATA;
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
  connect(): Observable<SdetailItem[]> {
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
  private getPagedData(data: SdetailItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SdetailItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'sfname': return compare(a.sfname, b.sfname, isAsc);
        case 'slname': return compare(a.slname, b.slname, isAsc);
        case 'semail': return compare(a.semail, b.semail, isAsc);
        case 'ssex': return compare(a.ssex, b.ssex, isAsc);
        case 'ssid': return compare(a.ssid, b.ssid, isAsc);
        case 'sdob': return compare(a.sdob, b.sdob, isAsc);
        case 'sclass': return compare(a.sclass, b.sclass, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
