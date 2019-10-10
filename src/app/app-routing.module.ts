import { NgModule } from '@angular/core';
import { AuthGuard } from './_guard';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DetailsComponent} from './details/details.component';
import {AboutComponent} from './about/about.component';
import {NavComponent} from './nav/nav.component';
import {DashnavComponent} from './dashnav/dashnav.component';
import {LocationComponent} from './location/location.component';
import {NewHLComponent} from './new-hl/new-hl.component';
import {NewHVComponent} from './new-hv/new-hv.component';
import {LoginComponent} from './login/login.component';
import { NVDataTableComponent } from './nv-data-table/nv-data-table.component';
import { UploadComponent } from './upload/upload.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LouerComponent } from './louer/louer.component';
import { VenteComponent } from './vente/vente.component';
import { AllComponent } from './all/all.component';
import { VenteListComponent } from './vente-list/vente-list.component';
import { OtherVenteComponent } from './other-vente/other-vente.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { DydetailsComponent } from './dydetails/dydetails.component';
import { InfoComponent } from './info/info.component';
import { VT360Component } from './vt360/vt360.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,   
  },
  {
    path: 'dashboard',
    component: DashnavComponent,
    children: [
      {
        path: 'loc',
        component: LocationComponent,   
      },
      {
        path: 'newHL',
        component: NewHLComponent,   
      },
      {
        path: 'newHV',
        component: NewHVComponent,   
      },
      {
        path: 'HvData_Table',
        component: NVDataTableComponent,   
      },
      {
        path: 'Upload',
        component: UploadComponent,   
      },
      {
        path: 'info/:id',
        component: InfoComponent,   
      },
      {
        path: 'newsletter',
        component: NewsletterComponent,   
      },
    ],
    canActivate: [AuthGuard] 
  },

  {
    path: 'nav',
    component: NavComponent,
    children: [
      {
         path: 'welcome',
         component: WelcomeComponent,   
      },
      {
         path: 'details/:id',
         component: DetailsComponent,   
       },  
       {
        path: 'Ldetails',
        component: DydetailsComponent,   
      },  
      {
        path: 'VirtuelTour',
        component: VT360Component,   
     },
       {
         path: 'about',
         component: AboutComponent,
       },
       {
        path: 'SearchNav',
        component: SearchNavComponent,
        children: [
          {
            path: 'searchlouer',
            component: LouerComponent,
          },
          {
            path: 'searchvente',
            component: VenteComponent,
          },
        ],
      },
       {
          path: 'searchlouer',
          component: LouerComponent,
        },
        {
          path: 'searchvente',
          component: VenteComponent,
        },
        {
          path: 'all',
          component: AllComponent,
        },
        {
          path: 'fff',
          component: VenteListComponent,   
       },
       {
        path: 'fuck',
        component: OtherVenteComponent,   
     },
     ],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
