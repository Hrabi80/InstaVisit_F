import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable }   from 'rxjs/Observable';
import { NVDataTableItem} from '../nv-data-table/nv-data-table-datasource';

@Injectable()
export class HouseLService{
    private _url = environment.api_url + '/api/ForRent';
    private _urlM = environment.api_url + '/api/ForRentM';
    projects: any = [];
    project:any=[];
    

    constructor(
        private _http: HttpClient,
    ){}

    getData(){
        return this._http.get(this._url+'/allData');
    }
    getDataM(){
        return this._http.get(this._urlM+'/allData');
    }
  

    AddHL(data){
        return this._http.post(this._url + '/AddHL', data );
    }
    AddHLM(data){
        return this._http.post(this._urlM + '/AddHLM', data );
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

    AddTransportM(id, data){
        return this._http.post(this._urlM+'/AddTransport/'+id,data);
    }
    AddInfoM(id, data){
        return this._http.post(this._urlM+'/AddInfo/'+id,data);
    }
    AddMapM(id, data){
        return this._http.post(this._urlM+'/AddMap/'+id,data);
    }
}