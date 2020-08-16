import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DatatableDataSource, DatatableItem } from './datatable-datasource';
import { AdminService } from '../_services/admin.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DatatableItem>;
  public apps: DatatableItem[] = new Array();
  TD:any[];
  dataSource = [];
  td = [{id:1, name: 'korba', adress: '14 Rue Tunis', surface: 500 ,price: 50.000}]

  displayedColumns = ['id', 'name','tel','surface','price','car','update','ss'];
  
  constructor(private _service: AdminService) { }

  ngOnInit() {

    return this._service.getData().subscribe((app:any) => {     
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
        this._service.delete(id).subscribe(
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
  }

}
