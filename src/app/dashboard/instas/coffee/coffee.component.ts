import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DatatableItem } from '../../salle/datatable/datatable-datasource';
import { AdminService } from '../../salle/_services/admin.service';
import swal from 'sweetalert2';
import { CoffeeService } from 'src/app/services/CoffeeService/coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DatatableItem>;
  public apps: DatatableItem[] = new Array();
  TD:any[];
  dataSource:MatTableDataSource<any> ;


  displayedColumns = ['id', 'name','tel','surface','adress','car','update','ss'];
  
  constructor(private coffeeService:CoffeeService) { }

  ngOnInit() {
     this.coffeeService.getCoffeeList().subscribe(res=>{
     
      this.dataSource=new MatTableDataSource([res])



    })

  }
/* 

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
 */
}

