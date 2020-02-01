import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { NOMeubleDataSource, NOMeubleItem } from './nomeuble-datasource';
import { HouseLService } from '../_services/HouseL.service'; 

@Component({
  selector: 'app-nomeuble',
  templateUrl: './nomeuble.component.html',
  styleUrls: ['./nomeuble.component.css']
})
export class NOMeubleComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<NOMeubleItem>;
  //dataSource: NOMeubleDataSource;
  //dataSource = new NOMeubleDataSource(this._service);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //displayedColumns = ['id', 'name','adress','surface','price','car','addIMG','sup/àjour'];
  public apps: NOMeubleItem[] = new Array();
  TD:any[];
  dataSource = [];
  td = [{id:1, name: 'korba', adress: '14 Rue Tunis', surface: 500 ,price: 50.000}]

  displayedColumns = ['id', 'name','adress','surface','price','car','ss'];
  constructor(private _service: HouseLService,){}
  ngOnInit() {
    return this._service.getData().subscribe((app:any) => {     
      this.dataSource  =  app;
      console.log(this.dataSource);
    });
    
    //{ this.apps;});
   //this.dataSource = new NVDataTableDataSource(this.apps);//= res["0"]["data"]);
   
  }
  

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }

  delete(id) {
    console.log(id)
      this._service.deleteHouse2(id).subscribe(res => {
        console.log(res);
      });
     // window.location.reload();
    }
}
