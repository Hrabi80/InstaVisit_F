import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { HouseVService } from '../_services/HouseV.service';

// TODO: Replace this with your own data model type
export interface NVDataTableItem {
  name: string;
  id: number;
  adress : string;
  surface : number;
  price : number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: NVDataTableItem[] = [

  {id: 1, name: 'korba', adress: '14 Rue Tunis', surface: 500 ,price: 50.000},
  {id: 2, name: 'Ariana' , adress: '14 Rue Tunis', surface: 500 ,price: 75.000},
  {id: 3, name: 'Sousse' , adress: '69 Rue Ibn Haithame', surface: 500 ,price: 200.000},
  {id: 4, name: 'Sousse' , adress: 'dds Rue sqdqd', surface: 500 ,price: 100.000},
];

/**
 * Data source for the NVDataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class NVDataTableDataSource extends DataSource<any> {
  data: NVDataTableItem[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private _service: HouseVService,) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<NVDataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    
    // return this._service.getData();
   
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
  private getPagedData(data: NVDataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: NVDataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
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
