
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
import { DetailsComponent } from './details/details.component';
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


import { LocationComponent } from './location/location.component';
import { NewHLComponent } from './new-hl/new-hl.component';
import { NewHVComponent } from './new-hv/new-hv.component';
import { LoginComponent } from './login/login.component';
import { NVDataTableComponent } from './nv-data-table/nv-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import { UploadComponent } from './upload/upload.component';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryComponent } from './gallery/gallery.component';
import { LouerComponent } from './louer/louer.component';
import { VenteComponent } from './vente/vente.component';
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
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MeubleDataTableComponent } from './meuble-data-table/meuble-data-table.component';
import { NOMeubleComponent } from './nomeuble/nomeuble.component';
import { InfoMComponent } from './info-m/info-m.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { Filter2Pipe } from './filter2.pipe';
import { Filter3Pipe } from './filter3.pipe';
import { Filter4Pipe } from './filter4.pipe';
import { LmdetailsComponent } from './lmdetails/lmdetails.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfoNmComponent } from './info-nm/info-nm.component';
import { LouernmComponent } from './louernm/louernm.component';
import { LdetailsComponent } from './ldetails/ldetails.component';
import { SafePipe } from './safe.pipe';




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
   
    // Filter2Pipe
  ],
  imports: [
    BrowserModule,
    GalleryModule,
   // GalleryModule.forRoot(),
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
    MatListModule,MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,FlexLayoutModule
  ],
  providers: [
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
