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
  dataSource = new NOMeubleDataSource(this._service);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //displayedColumns = ['id', 'name','adress','surface','price','car','addIMG','sup/àjour'];
  displayedColumns = ['id', 'name','adress','surface'];
  constructor(private _service: HouseLService,){}
  ngOnInit() {
    //this.dataSource = new NOMeubleDataSource();
    return this._service.getData().subscribe((app:any) => {
     
      this.dataSource  =  app;
     // this.dataSource.append(td);
      console.log("ffafa");
      console.log(this.dataSource);
      //this.dataSource.data = app.house as any[];
      this.dataSource = new NOMeubleDataSource(app);
    });
    //{ this.apps;});
   //this.dataSource = new NVDataTableDataSource(this.apps);//= res["0"]["data"]);
   
  }
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
