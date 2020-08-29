import ClientConfig = gapi.auth2.ClientConfig;

export interface NgGapiClientConfig extends ClientConfig {
  discoveryDocs: string[];
}

export class GoogleApiConfig {
  protected clientConfig: NgGapiClientConfig;

  constructor(clientConfig: NgGapiClientConfig) {
    //this.clientConfig = clientConfig;
    this.clientConfig =  {
      client_id: "1095916627106-048cigvr18lbhcbue7oqabsgrmh5inc5.apps.googleusercontent.com",
      discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4", "https://analyticsreporting.googleapis.com/v4/reports:batchGet"],
      scope: "https://analyticsreporting.googleapis.com/v4/reports:batchGet"
   }
  }

  public getClientConfig(): NgGapiClientConfig {
    return this.clientConfig;
  }
  
}