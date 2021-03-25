import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CoffeeService {
   //databaseURL:string = environment.api_url;
   databaseURL:string ="https://localhost:8000";
  constructor(private http:HttpClient) { }

    getCoffeeList (page?,limit?):Observable<any[]>{

      return this.http.get<any[]>(this.databaseURL+"/coffee?page="+page+"&"+"limit="+limit)
    }
}
