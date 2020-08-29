import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
declare let ga: any;
@Injectable({
  providedIn: 'root'
})
export class StatService {
  private url = environment.api_url ;
  private _url : 'https://analyticsreporting.googleapis.com/v4/reports:batchGet';
  constructor(
    private _http: HttpClient,) { }

  private useGA() : boolean { 
    return environment.GAtrackingId && typeof ga !== undefined;
}



 getInit(){
   return this._http.get(this.url+'/init');
 }
 getReport(){
  return this._http.get(this.url+'/report');
}
print(){
  return this._http.get(this.url+'/print');
}
/**
 * Sends the page view to GA.
 * @param  {string} page The path portion of a URL. This value should start with a slash (/) character.
 */
sendPageView(
    page: string
) {
    if (!this.useGA()) return;
    if (!page.startsWith('/')) page = `/${page}`;      
    ga('send', 'pageview', page);
}


/**
 * Sends the event to GA.
 * @param  {string} eventCategory Typically the object that was interacted with (e.g. 'Video')
 * @param  {string} eventAction The type of interaction (e.g. 'play')
 */
sendEvent(
    eventCategory: string,
    eventAction: string
) { 
    if (!this.useGA()) return;
    ga('send', 'event', eventCategory, eventAction);
}

public emitEvent(eventCategory: string,
  eventAction: string,
  eventLabel: string = null,
  eventValue: number = null) {
ga('send', 'event', { eventCategory, eventLabel, eventAction, eventValue });
}
 
}
