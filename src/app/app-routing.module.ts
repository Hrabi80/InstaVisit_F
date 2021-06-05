import { NgModule } from '@angular/core';
import { AuthGuard } from './_guard';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DetailsComponent} from './client/vente/details/details.component';
import {AboutComponent} from './about/about.component';
import {NavComponent} from './nav/nav.component';
import {DashnavComponent} from './dashnav/dashnav.component';
import {LocationComponent} from './dashboard/location/location.component';
import {NewHLComponent} from './dashboard/new-hl/new-hl.component';
import {NewHVComponent} from './dashboard/house_Vente/new-hv/new-hv.component';
import {LoginComponent} from './login/login.component';
import { NVDataTableComponent } from './dashboard/house_Vente/nv-data-table/nv-data-table.component';
import { UploadComponent } from './upload/upload.component';
import { LouerComponent } from './client/louer_meublé/louer/louer.component';
import { VenteComponent } from './client/vente/vente/vente.component';
import { AllComponent } from './all/all.component';

import { SearchNavComponent } from './search-nav/search-nav.component';
import { InfoComponent } from './info/info.component';
import { VT360Component } from './vt360/vt360.component';
import { NewsletterComponent } from './dashboard/newsletter/newsletter.component';
import { MeubleDataTableComponent } from './dashboard/house_meuble/meuble-data-table/meuble-data-table.component';
import { NOMeubleComponent } from './dashboard/house_Louer/nomeuble/nomeuble.component';
import { InfoMComponent } from './dashboard/house_meuble/info-m/info-m.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { LmdetailsComponent } from './client/louer_meublé/lmdetails/lmdetails.component';
import { InfoNmComponent } from './info-nm/info-nm.component';
import { LouernmComponent } from './client/non_meuble/louernm/louernm.component';
import { LdetailsComponent } from './client/non_meuble/ldetails/ldetails.component';
import { UpdatevComponent } from './dashboard/house_Vente/updatev/updatev.component';
import { UpdatelmComponent } from './dashboard/house_meuble/updatelm/updatelm.component';
import { UpdatelnmComponent } from './dashboard/house_Louer/updatelnm/updatelnm.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { NewSalleComponent } from './dashboard/salle/new-salle/new-salle.component';
import { DatatableComponent } from './dashboard/salle/datatable/datatable.component';
import { InfoSComponent} from './dashboard/salle/info/info.component';
import { SearchComponent} from './client/salle/search/search.component';
import { SalledetailComponent } from './client/salle/salledetail/salledetail.component';
import { UpdateSalleComponent } from './dashboard/salle/update-salle/update-salle.component';
import { InstasComponent } from './dashboard/instas/instas.component';
import { CoffeeComponent } from './dashboard/instas/coffee/coffee.component';
import { EditCoffeeComponent } from './dashboard/instas/coffee/edit-coffee/edit-coffee.component';
import { AddCoffeeComponent } from './dashboard/instas/coffee/add-coffee/add-coffee.component';
import { CaracCoffeeComponent } from './dashboard/instas/coffee/carac-coffee/carac-coffee.component';
import { AllCoffeeComponent } from './client/instas/coffee/all-coffee/all-coffee.component';
import { CultureDataTableComponent } from './dashboard/instas/culture/culture-data-table/culture-data-table.component';
import { AddCultureComponent } from './dashboard/instas/culture/add-culture/add-culture.component';
import { RestoDataTableComponent } from './dashboard/instas/resto/resto-data-table/resto-data-table.component';
import { AddRestoComponent } from './dashboard/instas/resto/add-resto/add-resto.component';
import { CultureInfoComponent } from './dashboard/instas/culture/culture-info/culture-info.component';
import { RestoInfoComponent } from './dashboard/instas/resto/resto-info/resto-info.component';
import { UpdateCultureComponent } from './dashboard/instas/culture/update-culture/update-culture.component';
import { UpdateRestoComponent } from './dashboard/instas/resto/update-resto/update-resto.component';
import { CultureDetailComponent } from './client/instaCulture/culture-detail/culture-detail.component';
import { CoffeeDetailComponent } from './client/instaCoffee/coffee-detail/coffee-detail.component';
import { RestoDetailComponent } from './client/instaResto/resto-detail/resto-detail.component';
import { RestoFiltreComponent } from './client/instaResto/resto-filtre/resto-filtre.component';
import { CultureFiltreComponent } from './client/instaCulture/culture-filtre/culture-filtre.component';
import { CoffeeFiltreComponent } from './client/instaCoffee/coffee-filtre/coffee-filtre.component';
import { ImmoComponent } from './immo/immo.component';
import { NavCultureComponent } from './nav/nav-culture/nav-culture.component';
import { NavRestoComponent } from './nav/nav-resto/nav-resto.component';
import { NavCoffeeComponent } from './nav/nav-coffee/nav-coffee.component';
import { NavSalleComponent } from './nav/nav-salle/nav-salle.component';
import { NavImmobilierComponent } from './nav/nav-immobilier/nav-immobilier.component';



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
        path: 'new_insta_culture',
        component: AddCultureComponent,   
      },
      {
        path: 'new_insta_resto',
        component: AddRestoComponent,   
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
        path: 'HLM_LISTE',
        component: MeubleDataTableComponent,   
      },
      {
        path: 'CULTURE_LISTE',
        component: CultureDataTableComponent,   
      },
      {
        path: 'resto_data_table',
        component: RestoDataTableComponent,   
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
        path: 'info_culture/:id',
        component: CultureInfoComponent,   
      },
      {
        path: 'info_resto/:id',
        component: RestoInfoComponent,   
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
        path: 'updateCulture/:id',
        component: UpdateCultureComponent,   
      },
      {
        path: 'updateResto/:id',
        component: UpdateRestoComponent,   
      },
      
      {
        path: 'newsletter',
        component: NewsletterComponent,   
      },
      {
        path: 'messages',
        component: MessagesComponent,   
      },
      {
        path: 'instas',
        component: InstasComponent,   
      },
      {
        path: 'coffee',
        component: CoffeeComponent, 
        children: []  
      },
      {
        path: 'coffee/add',
        component: AddCoffeeComponent,   
      },
      {
        path: 'coffee/edit/:id',
        component: EditCoffeeComponent,   
      },
      {
        path: 'coffee/characteristics/:id',
        component: CaracCoffeeComponent,   
      },
    ],
    canActivate: [AuthGuard] 
  },

  {
    path:'instavisit_immobilier', component:NavImmobilierComponent,
    children: [
     
      {
        path: 'filtre',
        component: CultureFiltreComponent,
      },
      {
        path: 'immobilier',
        component: ImmoComponent,
      },
      {
        path: 'detailles/:id',
        component: DetailsComponent,   
      },
      {
       path: 'logement_non_meubledetailles/:id',
       component: LdetailsComponent,   
     },
     {
       path: 'lmdetailles/:id',
       component: LmdetailsComponent,   
     },
     {
      path: 'logement_a_vendre_filtre',
      component: VenteComponent,
    },
    {
      path: 'logement_a_louer_non_meuble_filtre',
      component: LouernmComponent,
    },
    {
      path: 'logement_a_louer_filtre',
      component: LouerComponent,
    },
    {
      path: 'immobilier',
      component: ImmoComponent,
    },
     
    ]
  },
  {
    path:'instavisit_culture', component:NavCultureComponent,
    children: [
      {
          path: 'detailles/:id',
          component: CultureDetailComponent,    
      },
      {
        path: 'filtre',
        component: CultureFiltreComponent,
      },
    ]
  },

  {
    path:'instavisit_restaurant', component:NavRestoComponent,
    children: [
      {
          path: 'detailles/:id',
          component: RestoDetailComponent,    
      },
      {
        path: 'filtre',
        component: RestoFiltreComponent,
      },
    ]
  },
  {
    path:'instavisit_cafe', component:NavCoffeeComponent,
    children: [
      {
          path: 'detailles/:id',
          component: CoffeeDetailComponent,    
      },
      {
        path: 'filtre',
        component: CoffeeFiltreComponent,
      },
    ]
  },
  {
    path:'instavisit_salles_des_fetes', component:NavSalleComponent,
    children: [
      {
          path: 'detailles/:id',
          component: SalledetailComponent,    
      },
      {
        path: 'filtre',
        component: SearchComponent,
      },
    ]
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
        path: 'insta_culture_detailles/:id',
        component: CultureDetailComponent,   
      },
      {
        path: 'insta_coffee_detailles/:id',
        component: CoffeeDetailComponent,   
      },
      {
        path: 'insta_resto_detailles/:id',
        component: RestoDetailComponent,   
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
        path: 'logement_a_vendre_filtre',
        component: VenteComponent,
      },
       {
          path: 'logement_a_louer_filtre',
          component: LouerComponent,
        },
        {
          path: 'insta_salle_fetes_filtre',
          component: SearchComponent,
        },
        {
          path: 'insta_resto_filtre',
          component: RestoFiltreComponent,
        },
        {
          path: 'insta_culture_filtre',
          component: CultureFiltreComponent,
        },
        {
          path: 'insta_cafe_filtre',
          component: CoffeeFiltreComponent,
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
          path: 'immobilier',
          component: ImmoComponent,
        },
        {
          path: 'all',
          component: AllComponent,
        },
        {
          path: 'coffee',
          component: AllCoffeeComponent,
        },
      
    
     ],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule { }
