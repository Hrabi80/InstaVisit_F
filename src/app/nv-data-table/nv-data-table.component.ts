import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { NVDataTableDataSource, NVDataTableItem } from './nv-data-table-datasource';
import { HouseVService } from '../_services/HouseV.service';
import swal from 'sweetalert2';
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
  displayedColumns = ['id', 'name','adress','surface','price','car','update','ss'];
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

    delete(id) {
      swal.fire({
        type:'warning',
        title: 'Are you sure to Delete Staff?',
        text: 'You will not be able to recover the data of Staff',
        showCancelButton: true,
        confirmButtonColor: '#049F0C',
        cancelButtonColor:'#ff0000',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((res) => {
        if (res.value) {
          this._service.deleteHouse(id).subscribe(
            data => {
              console.log(data);
              swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              const index = this.dataSource.findIndex(x => x.id ===id);
              this.dataSource.splice(index, 1);
              setTimeout(()=>{
                this.table.dataSource=this.dataSource;
                this.table.renderRows();
              },1500);
            });
        }else{
          swal.fire(
            'Canceled!',
            'The operation is canceled.',
            'success'
          );
        }
      });
    }

}
