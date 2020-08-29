import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { NOMeubleDataSource, NOMeubleItem } from './nomeuble-datasource';
import { HouseLService } from '../../../_services/HouseL.service'; 
import swal from 'sweetalert2';
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

  displayedColumns = ['id', 'name','adress','surface','price','car','update','ss'];
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
        this._service.deleteHouse2(id).subscribe(
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
        )
      }
    });
    // window.location.reload();
  }
}
