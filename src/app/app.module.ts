
//import { Filter2Pipe } from './filter2.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthService} from './_services/auth.service';
import { LocalisationService } from './_services/Localisation.service';
import { HouseVService } from './_services/HouseV.service';
import { HouseLService } from './_services/HouseL.service';
import { VoutputService } from './_services/Voutput.service';
import { LoutputService } from './_services/Loutput.service';
import { FrontService } from './_services/Front.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './client/vente/details/details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashnavComponent } from './dashnav/dashnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatRadioGroup} from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from  '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { JwPaginationComponent } from 'jw-angular-pagination';
import { JwPaginationComponent } from './jw-pagination/jw-pagination.component';

import { LocationComponent } from './dashboard/location/location.component';
import { NewHLComponent } from './dashboard/new-hl/new-hl.component';
import { NewHVComponent } from './dashboard//house_Vente/new-hv/new-hv.component';
import { LoginComponent } from './login/login.component';
import { NVDataTableComponent } from './dashboard/house_Vente/nv-data-table/nv-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import { UploadComponent } from './upload/upload.component';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryComponent } from './gallery/gallery.component';
import { LouerComponent } from './client/louer_meublé/louer/louer.component';
import { VenteComponent } from './client/vente/vente/vente.component';
import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';
import 'hammerjs'; 
import 'mousetrap';
import { AllComponent } from './all/all.component';
import { InfoComponent } from './info/info.component';
import { FilterPipe } from './filter.pipe';
import { VenteListComponent } from './vente-list/vente-list.component';
import { OtherVenteComponent } from './other-vente/other-vente.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { VT360Component } from './vt360/vt360.component';
import { NewsletterComponent } from './dashboard/newsletter/newsletter.component';
import { MeubleDataTableComponent } from './dashboard/house_meuble/meuble-data-table/meuble-data-table.component';
import { NOMeubleComponent } from './dashboard/house_Louer/nomeuble/nomeuble.component';
import { InfoMComponent } from './dashboard/house_meuble/info-m/info-m.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { Filter2Pipe } from './filter2.pipe';
import { Filter3Pipe } from './filter3.pipe';
import { Filter4Pipe } from './filter4.pipe';
import { LmdetailsComponent } from './client/louer_meublé/lmdetails/lmdetails.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfoNmComponent } from './info-nm/info-nm.component';
import { LouernmComponent } from './client/non_meuble/louernm/louernm.component';
import { LdetailsComponent } from './client/non_meuble/ldetails/ldetails.component';
import { SafePipe } from './safe.pipe';
import { UpdatevComponent } from './dashboard/house_Vente/updatev/updatev.component';
import { UpdatelmComponent } from './dashboard/house_meuble/updatelm/updatelm.component';
import { UpdatelnmComponent } from './dashboard/house_Louer/updatelnm/updatelnm.component';
import { MobileOverviewComponent } from './comps/mobile-overview/mobile-overview.component';
import { CommuteTableComponent } from './comps/commute-table/commute-table.component';
import { FooterComponent } from './footer/footer.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { PartnerComponent } from './partner/partner.component';
import { NewSalleComponent } from './dashboard/salle/new-salle/new-salle.component';
import { DatatableComponent } from './dashboard/salle/datatable/datatable.component';
import { InfoSComponent } from './dashboard/salle/info/info.component';
import { SearchComponent } from './client/salle/search/search.component';
import { SalledetailComponent } from './client/salle/salledetail/salledetail.component';
import { MobileOverviewSalleComponent } from './comps/mobile-overview-salle/mobile-overview-salle.component';
import { UpdateSalleComponent } from './dashboard/salle/update-salle/update-salle.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { ChartsModule } from 'ng2-charts';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {ModuleWithProviders, Provider} from '@angular/core';

/*
import {GoogleAuthService} from './_services/_googleServices/GoogleAuthService';
import {GoogleApiService} from './_services/_googleServices/GoogleApiService';
*/
import { NgGapiClientConfig } from './_helpers/_interfaces/NgGapiClientConfig';
import { GoogleApiModule } from './_services/_googleServices/GoogleApiModule';
import { NG_GAPI_CONFIG } from './_services/_googleServices';
import { GoogleApiConfig } from './_services/_googleServices/config/GoogleApiConfig';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "UA-175521849-1",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
      "https://www.googleapis.com/auth/analytics.readonly",
      "https://www.googleapis.com/auth/analytics"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    AboutComponent,
    DetailsComponent,
    DashnavComponent,
    LocationComponent,
    NewHLComponent,
    NewHVComponent,
    LoginComponent,
    NVDataTableComponent,
    UploadComponent,
    GalleryComponent,
    LouerComponent,
    VenteComponent,
    AllComponent,
    InfoComponent,
    FilterPipe,
    JwPaginationComponent,
    VenteListComponent,
    OtherVenteComponent,
    SearchNavComponent,
    VT360Component,
    NewsletterComponent,
    MeubleDataTableComponent,
    NOMeubleComponent,
    InfoMComponent,
    OurworkComponent,
    Filter2Pipe,
    Filter3Pipe,
    Filter4Pipe,
    LmdetailsComponent,
    InfoNmComponent,
    LouernmComponent,
    LdetailsComponent,
    SafePipe,
    UpdatevComponent,
    UpdatelmComponent,
    UpdatelnmComponent,
    MobileOverviewComponent,
    CommuteTableComponent,
    FooterComponent,
    MessagesComponent,
    PartnerComponent,
    NewSalleComponent,
    DatatableComponent,
    InfoSComponent,
    SearchComponent,
    SalledetailComponent,
    MobileOverviewSalleComponent,
    UpdateSalleComponent,
    StatisticsComponent
    // Filter2Pipe
  ],
  imports: [
    
    BrowserModule,
    GalleryModule,
    ChartsModule,
   // GalleryModule.forRoot(),
    AngularFontAwesomeModule,
    Angulartics2Module.forRoot(),
    LightboxModule,
    GalleryModule.withConfig({  }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule , 
    BrowserAnimationsModule,
    NgxGalleryModule,
    NgxImageGalleryModule,
    MatButtonModule, MatCheckboxModule, LayoutModule, MatSliderModule,MatRadioModule,MatStepperModule,
    MatToolbarModule, MatSidenavModule, MatIconModule,MatFormFieldModule,MatInputModule,
    MatListModule,MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,FlexLayoutModule,
   // GoogleApiConfig,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [
     //  gapiConfigProvider,
   //     GoogleAuthService,
     //   GoogleApiService,
    JwPaginationComponent,
    LocalisationService,
    AuthService,
    HouseVService,
    HouseLService,
    VoutputService,
    LoutputService,
    FrontService,
    JwtInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
