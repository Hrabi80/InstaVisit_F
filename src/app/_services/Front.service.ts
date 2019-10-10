import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class FrontService{
    private _url = environment.api_url + '/api/Front';
  
    constructor(
        private _http: HttpClient,
    ){}

    AddMail(data){
        return this._http.post(this._url + '/AddNewsletter', data);
    }
    AddContact(data){
        return this._http.post(this._url + '/AddContact', data);
    }
    getNewsletter(){
        return this._http.get(this._url+'/getNewsletter');   
    }
}