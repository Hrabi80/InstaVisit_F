import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MeubleDataTableDataSource, MeubleDataTableItem } from './meuble-data-table-datasource';
import { HouseLService } from '../_services/HouseL.service';

@Component({
  selector: 'app-meuble-data-table',
  templateUrl: './meuble-data-table.component.html',
  styleUrls: ['./meuble-data-table.component.css']
})
export class MeubleDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<MeubleDataTableItem>;
  public apps: MeubleDataTableItem[] = new Array();
  TD:any[];
  dataSource = [];
  td = [{id:1, name: 'korba', adress: '14 Rue Tunis', surface: 500 ,price: 50.000}]

  displayedColumns = ['id', 'name','adress','surface','price','car','ss'];

  constructor(private _service: HouseLService, 
    ){}

  ngOnInit() {
    return this._service.getDataM().subscribe((app:any) => {     
      this.dataSource  =  app;
      console.log(this.dataSource);
    });
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }
}
