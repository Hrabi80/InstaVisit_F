import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CoffeeService {
   //databaseURL:string = environment.api_url;
   private _url = environment.api_url + '/api/InstaCoffee/';
   private _url_public = environment.api_url+ '/public/coffee/'
   databaseURL:string ="https://localhost:8000/public/coffee/";
  constructor(private http:HttpClient) { }
  //get all coffee
    getCoffeeList (page?,limit?):Observable<any[]>{

      return this.http.get<any[]>(this._url_public+"?page="+page+"&"+"limit="+limit)
    }
    getData():Observable<any>{
      return this.http.get(this._url_public+'all');
    }
   //get one coffee
   getOneCoffee (id){

    return this.http.get(this._url+id);
  }

    //add new coffee

    addNewCoffee(data){

      return this.http.post(this._url + 'add', data , {reportProgress:true , observe:'events'});
    }
   
       //update coffee

      UpdateCoffee(data,idCoffee){
        return this.http.put<any[]>(this._url+"updateinfo/"+idCoffee,data)};
  //delete a specific coffee

  deleteCoffee(id){

    return this.http.delete<any[]>(this._url+"delete/"+id)
  }
  //add Transport for Coffee

    addTransport(data,id){

      return this.http.post<any[]>(this._url+"addtransport/"+id,data);
    }

    //get Transport of a specific coffee

    GetTransport(idCoffee){
        return this.http.get<any[]>(this._url+"getstation/"+idCoffee);

    }
    //update Transport of a specific coffee

    UpdateTransport(id,data){
      return this.http.put<any[]>(this._url+"updatetransport/"+id,data);

  }


  //get map of a specific coffee

  GetMap(idCoffee){
    return this.http.get<any[]>(this._url+"getMap/"+idCoffee);
    }
  //add map for Coffee

    addMap(data,idCoffee){

        return this.http.post<any[]>(this._url+"addmap/"+idCoffee,data);
      }
      //update Map of a specific coffee

      UpdateMap(id,data){
        return this.http.put<any[]>(this._url+"updatemap/"+id,data);
  
    }
      //get Fiche of a specific coffee

      GetFiche(idCoffee){
        return this.http.get<any[]>(this._url+"getfiche/"+idCoffee);

    }

    //add Fiche for Coffee

    addFiche(data,idCoffee){

      return this.http.post<any[]>(this._url+"addfiche/"+idCoffee,data);
    }
      //update fiche of a specific coffee

      UpdateFiche(idFiche,data){
        return this.http.put<any[]>(this._url+"updatefiche/"+idFiche,data);
    }
  }


