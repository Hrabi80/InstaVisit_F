import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthService} from './_services/auth.service';
import { LocalisationService } from './_services/Localisation.service';
import { HouseVService } from './_services/HouseV.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashnavComponent } from './dashnav/dashnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { LocationComponent } from './location/location.component';
import { NewHLComponent } from './new-hl/new-hl.component';
import { NewHVComponent } from './new-hv/new-hv.component';
import { LoginComponent } from './login/login.component';
import { NVDataTableComponent } from './nv-data-table/nv-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UploadComponent } from './upload/upload.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    AboutComponent,
    DetailsComponent,
    DashboardComponent,
    DashnavComponent,
    LocationComponent,
    NewHLComponent,
    NewHVComponent,
    LoginComponent,
    NVDataTableComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule , 
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, LayoutModule, 
    MatToolbarModule, MatSidenavModule, MatIconModule,
    MatListModule,MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
  ],
  providers: [
    LocalisationService,
    AuthService,
    HouseVService,
    //ChatService,
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
