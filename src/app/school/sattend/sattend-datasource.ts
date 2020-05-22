import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface SattendItem {
  name: string;
  class: string;
  id: number;
}

// TODO: replace this with real data from your application
export var EXAMPLE_DATA: SattendItem[] = [
  { id: 1, name: 'Hydrogen', class: 'Hydrogen'},
  { id: 2, name: 'Helium', class: 'Hydrogen'},
  { id: 3, name: 'Lithium', class: 'Hydrogen'},
  { id: 4, name: 'Beryllium', class: 'Hydrogen'},
  { id: 5, name: 'Boron', class: 'Hydrogen'},
  { id: 6, name: 'Carbon', class: 'Hydrogen'},
  { id: 7, name: 'Nitrogen', class: 'Hydrogen'},
  { id: 8, name: 'Oxygen', class: 'Hydrogen'},
  { id: 9, name: 'Fluorine', class: 'Hydrogen'},
  { id: 10, name: 'Neon', class: 'Hydrogen'},
  { id: 11, name: 'Sodium', class: 'Hydrogen'},
  { id: 12, name: 'Magnesium', class: 'Hydrogen'},
  { id: 13, name: 'Aluminum', class: 'Hydrogen'},
  { id: 14, name: 'Silicon', class: 'Hydrogen'},
  { id: 15, name: 'Phosphorus', class: 'Hydrogen'},
  { id: 16, name: 'Sulfur', class: 'Hydrogen'},
  { id: 17, name: 'Chlorine', class: 'Hydrogen'},
  { id: 18, name: 'Argon', class: 'Hydrogen'},
  { id: 19, name: 'Potassium', class: 'Hydrogen'},
  { id: 20, name: 'Calcium', class: 'Hydrogen'},
  { id: 20, name: 'Calcium', class: 'Hydrogen'},
];

/**
 * Data source for the Sattend view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SattendDataSource extends DataSource<SattendItem> {
  data: SattendItem[] = EXAMPLE_DATA;
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
  connect(): Observable<SattendItem[]> {
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
  private getPagedData(data: SattendItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SattendItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'class': return compare(a.class, b.class, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
