/// <reference path="../../../../node_modules/@types/gapi/index.d.ts" />
import {GoogleApiService} from './GoogleApiService';
//import { GoogleAuth } from "gabi.auth2.GoogleAuth";
//import GoogleAuth =  gabi.auth2.ClientConfig;
import GoogleAuth = gapi.auth2.GoogleAuth;
import {Observable, Observer, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import { NgZone, Injectable, Optional } from '@angular/core';
declare var gabi: any ;

@Injectable()
export class GoogleAuthService {
  
  private GoogleAuth: GoogleAuth = undefined;

  constructor(
    private googleApi: GoogleApiService,
    private zone : NgZone) {
    this.googleApi.onLoad().subscribe(() => {
      this.loadGapiAuth().subscribe();
    });
  }
  loadClient(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.zone.run(() => {
               gapi.load('client', {
                   callback: resolve,
                   onerror: reject,
                   timeout: 1000, // 5 seconds.
                   ontimeout: reject
               });
        });
   });
}
  
  public getAuth(newInstance = false): Observable<GoogleAuth> {
    if (!this.GoogleAuth || newInstance) {
      return this.googleApi.onLoad()
        .pipe(mergeMap(() => this.loadGapiAuth()));
    }
    return of(this.GoogleAuth);
  }

  private loadGapiAuth(): Observable<GoogleAuth> {
    return new Observable((observer: Observer<GoogleAuth>) => {
      gapi.load('auth2', () => {
        gapi.auth2.init(this.googleApi.getConfig().getClientConfig()).then((auth: GoogleAuth) => {
          this.GoogleAuth = auth;
          observer.next(auth);
          observer.complete();
        }).catch((err: any) => observer.error(err));
      });
    });
  }
}