import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class AuthService {
  
  authState: any = null;
  private _url = environment.api_url;
  public token: string;
  model: any;

  constructor(private http: HttpClient,
             ){

   // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.token = currentUser && currentUser.token;
  }

 
  
  login(username: string, password: string): Observable<boolean> {
    


    return this.http.post(this._url+'/login_check', {username: username, password: password} )
    .pipe(map((response: any) =>  {
        // login successful if there's a jwt token in the response
        this.token = response.token;
        if (this.token) {
          // set token property
          // this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
          localStorage.setItem('Username', JSON.stringify({username}));
        

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })).catch(this.handelError);
  }
 

   getToken()
   {
     return this.token;
   }

  currentUser=localStorage.getItem('currentUser');
  //Username=localStorage.getItem('Username');
  getUsername()
  {
    return localStorage.getItem('Username');;
  }


    // Returns current user UID
    get currentUserId(): string {
      return this.login ? this.authState.uid : '';
    }

    getCurrentUser()
    {
      return this.currentUser;
    }


  
  
  
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handelError(error: Response) {

    return Observable.throw(error.json() || 'server error');

  }
 
 
  loggedIn() {
    console.log(localStorage.getItem('currentUser'));
    if(localStorage.getItem('currentUser') == null || localStorage.getItem('currentUser') == undefined )
      return false;
    else return true;
  
  }




}
