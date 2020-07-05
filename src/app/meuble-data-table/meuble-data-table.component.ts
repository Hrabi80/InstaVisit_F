import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MeubleDataTableDataSource, MeubleDataTableItem } from './meuble-data-table-datasource';
import { HouseLService } from '../_services/HouseL.service';
import swal from 'sweetalert2';

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

  displayedColumns = ['id', 'name','adress','surface','price','car','update','ss'];

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
 
     /*  
    this._service.deleteHouse(id).subscribe(
      data => {
        if (data.hasOwnProperty('error')) {
          console.log("error")
        } else if (data) {
          console.log(data);
          swal.fire({
            type:'success',
            title: 'Deleted!',
            text: 'The Staff has been deleted.',              
          })
        }
      }   */
     
    delete2(id){
  //  var result = confirm("Want to delete?");
  /*
    Swal.fire({
      type: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      
    })
    if (result){
      this._service.deleteHouse(id).subscribe(res => {
        console.log(res);
      });
    };
*/
  }
}
