import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable }   from 'rxjs/Observable';
import { NVDataTableItem} from '../nv-data-table/nv-data-table-datasource';

@Injectable()
export class HouseVService{
    private _url = environment.api_url + '/api/ToBuy';
    projects: any = [];
    project:any=[];
    

    constructor(
        private _http: HttpClient,
    ){}

    getData()/*:Observable/*<NVDataTableItem[]>*/{
        return this._http.get(this._url+'/allData');/*<NVDataTableItem[]>*///(this._url+'/getData');
      //  console.log(this._http.get(this._url+'/getData'));
    }
  

    AddHV(data){
        return this._http.post(this._url + '/AddHouse', data , {reportProgress:true , observe:'events'});
    }

    upload(data){
        return this._http.post(this._url + '/AddHouse', data , {reportProgress:true , observe:'events'});
    }

    AddTransport(id, data){
        return this._http.post(this._url+'/AddTransport/'+id,data);
    }
    AddInfo(id, data){
        return this._http.post(this._url+'/AddInfo/'+id,data);
    }
    AddMap(id, data){
        return this._http.post(this._url+'/AddMap/'+id,data);
    }
}