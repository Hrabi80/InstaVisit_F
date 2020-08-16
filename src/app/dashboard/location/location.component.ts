import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LocalisationService } from '../../_services/Localisation.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  form: FormGroup;
  locs: any=[];
  constructor(
    private _service: LocalisationService,
    private  _fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.form = this._fb.group({
      gov: new FormControl(''),
      city: new FormControl(''),
  });
    this._service.getLocs()
      .subscribe(res=>{
        this.locs= res;
        console.log(this.locs);
      })
  }

  AddLoc(){
    this._service.AddLocation(this.form.value)
    .subscribe(res => {
      console.log(res);
      swal.fire(
        'Ajouter !',
        'Une nouvelle localisation est ajoutée.',
        'success'
      );
    });
  }
  delete(id){
    swal.fire({
      type:'warning',
      title: 'Are you sure to Delete the location?',
      text: 'You will not be able to recover the data of Staff',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((res) => {
      if (res.value) {
        this._service.deleteLoc(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Cette localisation est supprimée.',
              'success'
            );
            const index = this.locs.findIndex(x => x.id ===id);
              this.locs.splice(index, 1);
          });
      }else{
        swal.fire(
          'Canceled!',
          'Cette operation est annulée.',
          'success'
        )
      }
    });
  }
  delete2(id){
    this._service.deleteLoc(id)
      .subscribe(res => {
      console.log(res);
    });
  }

}
