import { NgModule } from '@angular/core';
import { AuthGuard } from './_guard';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DetailsComponent} from './details/details.component';
import {AboutComponent} from './about/about.component';
import {NavComponent} from './nav/nav.component';
import {DashnavComponent} from './dashnav/dashnav.component';
import {LocationComponent} from './dashboard/location/location.component';
import {NewHLComponent} from './new-hl/new-hl.component';
import {NewHVComponent} from './new-hv/new-hv.component';
import {LoginComponent} from './login/login.component';
import { NVDataTableComponent } from './nv-data-table/nv-data-table.component';
import { UploadComponent } from './upload/upload.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LouerComponent } from './client/louer_meublé/louer/louer.component';
import { VenteComponent } from './vente/vente.component';
import { AllComponent } from './all/all.component';
import { VenteListComponent } from './vente-list/vente-list.component';
import { OtherVenteComponent } from './other-vente/other-vente.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { InfoComponent } from './info/info.component';
import { VT360Component } from './vt360/vt360.component';
import { NewsletterComponent } from './dashboard/newsletter/newsletter.component';
import { MeubleDataTableComponent } from './dashboard/house_meuble/meuble-data-table/meuble-data-table.component';
import { NOMeubleComponent } from './nomeuble/nomeuble.component';
import { InfoMComponent } from './dashboard/house_meuble/info-m/info-m.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { LmdetailsComponent } from './client/louer_meublé/lmdetails/lmdetails.component';
import { InfoNmComponent } from './info-nm/info-nm.component';
import { LouernmComponent } from './louernm/louernm.component';
import { LdetailsComponent } from './ldetails/ldetails.component';
import { UpdatevComponent } from './updatev/updatev.component';
import { UpdatelmComponent } from './dashboard/house_meuble/updatelm/updatelm.component';
import { UpdatelnmComponent } from './updatelnm/updatelnm.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { NewSalleComponent } from './dashboard/salle/new-salle/new-salle.component';
import { DatatableComponent } from './dashboard/salle/datatable/datatable.component';
import { InfoSComponent} from './dashboard/salle/info/info.component';
import { SearchComponent} from './client/salle/search/search.component';
import { SalledetailComponent } from './client/salle/salledetail/salledetail.component';
import { UpdateSalleComponent } from './dashboard/salle/update-salle/update-salle.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'nav/welcome',
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
        path: 'stat',
        component: StatisticsComponent,   
      },
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
        path: 'newSL',
        component: NewSalleComponent,   
      },
      {
        path: 'HvData_Table',
        component: NVDataTableComponent,   
      },
      {
        path: 'Salle_Data_Table',
        component: DatatableComponent,   
      },
      {
        path: 'HL_LISTE',
        component: NOMeubleComponent,   
      },
      {
        path: 'HLM_LISTE',
        component: MeubleDataTableComponent,   
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
        path: 'infoM/:id',
        component: InfoMComponent,   
      },
      {
        path: 'infoNM/:id',
        component: InfoNmComponent,   
      },
      {
        path: 'infoSalle/:id',
        component: InfoSComponent,   
      },
      {
        path: 'updateV/:id',
        component: UpdatevComponent,   
      },
      {
        path: 'updateLM/:id',
        component: UpdatelmComponent,   
      },
      {
        path: 'updateLNM/:id',
        component: UpdatelnmComponent,   
      },
      {
        path: 'updateSalle/:id',
        component: UpdateSalleComponent,   
      },
      
      {
        path: 'newsletter',
        component: NewsletterComponent,   
      },
      {
        path: 'messages',
        component: MessagesComponent,   
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
        path: 'ldetails/:id',
        component: LdetailsComponent,   
      },
       {
        path: 'lmdetails/:id',
        component: LmdetailsComponent,   
      }, 
      {
        path: 'Salledetails/:id',
        component: SalledetailComponent,   
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
        path: 'howWeWork',
        component: OurworkComponent,
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
        path: 'searchvente',
        component: VenteComponent,
      },
       {
          path: 'searchlouer',
          component: LouerComponent,
        },
        {
          path: 'ChercherSalle',
          component: SearchComponent,
        },
        
        {
          path: 'searchlouerNonMeuble',
          component: LouernmComponent,
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
  exports: [RouterModule],
})
export class AppRoutingModule { }
