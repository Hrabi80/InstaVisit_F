import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { NVDataTableDataSource, NVDataTableItem } from './nv-data-table-datasource';
import { HouseVService } from '../_services/HouseV.service';

@Component({
  selector: 'app-nv-data-table',
  templateUrl: './nv-data-table.component.html',
  styleUrls: ['./nv-data-table.component.css']
})
export class NVDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<NVDataTableItem>;
  public apps: NVDataTableItem[] = new Array();
//  dataSource:NVDataTableDataSource(NVDataTableItem); 
  //dataSource = new NVDataTableDataSource(this._service);
  TD:any[];
  dataSource = [];
  td = [{id:1, name: 'korba', adress: '14 Rue Tunis', surface: 500 ,price: 50.000}]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','adress','surface','price','addIMG','ss'];
  constructor(private _service: HouseVService,
             // private matTable:NVDataTableDataSource   
             ){}
            
  ngOnInit() {
   return this._service.getData().subscribe((app:any) => {
     
     this.dataSource  =  app;
    // this.dataSource.append(td);
    console.log("ffafa");
     console.log(this.dataSource);
     //this.dataSource.data = app.house as any[];
    // this.dataSource = new NVDataTableDataSource(app);
   });
   //{ this.apps;});
  //this.dataSource = new NVDataTableDataSource(this.apps);//= res["0"]["data"]);
   
  }
 

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
   //  this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
