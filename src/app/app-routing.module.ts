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
         path: 'details',
         component: DetailsComponent,   
       },  
       {
         path: 'about',
         component: AboutComponent,
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
