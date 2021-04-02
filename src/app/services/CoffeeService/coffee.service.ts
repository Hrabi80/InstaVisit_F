import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CoffeeService {
   //databaseURL:string = environment.api_url;
   databaseURL:string ="https://localhost:8000/public/coffee/";
  constructor(private http:HttpClient) { }
  //get all coffee
    getCoffeeList (page?,limit?):Observable<any[]>{

      return this.http.get<any[]>(this.databaseURL+"?page="+page+"&"+"limit="+limit)
    }
   //get one coffee
   getOneCoffee (id){

    return this.http.get(this.databaseURL+id);
  }

    //add new coffee

    addNewCoffee(data){

      return this.http.post(this.databaseURL + 'add', data , {reportProgress:true , observe:'events'});
    }
   
       //update coffee

      UpdateCoffee(data,idCoffee){
        return this.http.put<any[]>(this.databaseURL+"updateinfo/"+idCoffee,data)};
  //delete a specific coffee

  deleteCoffee(id){

    return this.http.delete<any[]>(this.databaseURL+"delete/"+id)
  }
  //add Transport for Coffee

    addTransport(data,id){

      return this.http.post<any[]>(this.databaseURL+"addtransport/"+id,data);
    }

    //get Transport of a specific coffee

    GetTransport(idCoffee){
        return this.http.get<any[]>(this.databaseURL+"getstation/"+idCoffee);

    }
    //update Transport of a specific coffee

    UpdateTransport(idCoffee,data){
      return this.http.put<any[]>(this.databaseURL+"updatetransport/"+idCoffee,data);

  }



  }


