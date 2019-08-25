import { Component } from '@angular/core';
import {Router, RouteConfigLoadEnd} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-dashnav',
  templateUrl: './dashnav.component.html',
  styleUrls: ['./dashnav.component.css']
})
export class DashnavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authenticationService: AuthService,
              private router: Router,) {}
    logout()
    {
       this.authenticationService.logout();
       this.router.navigateByUrl('login');
  
    }

}
