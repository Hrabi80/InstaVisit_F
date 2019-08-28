import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { NVDataTableDataSource, NVDataTableItem } from './nv-data-table-datasource';

@Component({
  selector: 'app-nv-data-table',
  templateUrl: './nv-data-table.component.html',
  styleUrls: ['./nv-data-table.component.css']
})
export class NVDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<NVDataTableItem>;
  dataSource: NVDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','adress','surface','price','addIMG','ss'];

  ngOnInit() {
    this.dataSource = new NVDataTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
