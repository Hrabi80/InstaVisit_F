import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { StatService } from './stat.service';
import { HttpClient } from "@angular/common/http";
import HttpBatch = gapi.client.HttpBatch;
import { GoogleApiService } from '../../_services/_googleServices/GoogleApiService';
declare let ga: any;
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  x:any;
  constructor(
    private gapiService: GoogleApiService, 
    private stat : StatService,
    private _http : HttpClient,
    private router : Router,
   ){
   
     }

  ngOnInit() {

    this.stat.sendPageView('/join');
    this.stat.getReport()
    .subscribe((res)=>{
      console.log(res);
    })
}

submitEvent() { // event fired from home.component.html element (button, link, ... )
  this.stat.emitEvent("testCategory", "testAction", "testLabel", 10);
}

loadGA(userId) {
  if (!environment.GAtrackingId) return;

  let scriptId = 'google-analytics';

  if (document.getElementById(scriptId)) {
      return;
  }

  var s = document.createElement('script') as any;
  s.type = "text/javascript";
  s.id = scriptId;
  s.innerText = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', { trackingId: '" + environment.GAtrackingId + "', cookieDomain: 'auto', userId: '" + '1095916627106-048cigvr18lbhcbue7oqabsgrmh5inc5.apps.googleusercontent.com' + "'});ga('send', 'pageview', '/');";

  document.getElementsByTagName("head")[0].appendChild(s);
}


fun(){
  gapi.client.request({
    path: '/v4/reports:batchGet',
    //root: 'https://analyticsreporting.googleapis.com/',
    method: 'POST',
    body: {
      reportRequests: [
        {
          viewId: 226620631,
          dateRanges: [
            {
              startDate: '7daysAgo',
              endDate: 'today'
            }
          ],
          metrics: [
            {
              expression: 'ga:sessions'
            }
          ]
        }
      ]
    }
  }).then( console.error.bind(console));
}

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 5,99,30,5,6,55,50,65,90,60], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','july','sep','aout'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  



 

}
