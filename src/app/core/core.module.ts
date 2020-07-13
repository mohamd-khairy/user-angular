import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/main-layout/header/header.component';
import { FooterComponent } from './layout/main-layout/footer/footer.component';
import { SubHeaderComponent } from './layout/main-layout/sub-header/sub-header.component';
import { NavBarComponent } from './layout/main-layout/nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { SearchHomeComponent } from './layout/main-layout/header/search-home/search-home.component';
import { BrowseCategoriesUiComponent } from './layout/main-layout/nav-bar/browse-categories-ui/browse-categories-ui.component';
import { NavbarKeywordsUiComponent } from './layout/main-layout/nav-bar/navbar-keywords-ui/navbar-keywords-ui.component';
import { ResultSearchComponent } from './layout/main-layout/header/search-home/result-search/result-search.component';
// tslint:disable-next-line: max-line-length
import { CateringServicesComponent } from './layout/main-layout/header/search-home/result-search/catering-services/catering-services.component';

// tslint:disable-next-line: max-line-length
import { ServiceGalleryComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/service-gallery.component';
// tslint:disable-next-line: max-line-length
import { ServicePackageComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-package/service-package.component';
// tslint:disable-next-line: max-line-length
import { GalleryOptionComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/gallery-option/gallery-option.component';
// tslint:disable-next-line: max-line-length

// tslint:disable-next-line: max-line-length
import { RoyalGalleryComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/gallery-option/royal-gallery/royal-gallery.component';
// tslint:disable-next-line: max-line-length
import { HallPackageComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/gallery-option/hall-package/hall-package.component';
// tslint:disable-next-line: max-line-length
import { TheGalleryComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/gallery-option/royal-gallery/the-gallery/the-gallery.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
// tslint:disable-next-line: max-line-length
import { FacilitiesAndAmenitiesComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/gallery-option/facilities-and-amenities/facilities-and-amenities.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
// material
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
// tslint:disable-next-line: max-line-length
import { MapComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/gallery-option/map/map.component';
// tslint:disable-next-line: max-line-length
import { PlacePolicyComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/gallery-option/place-policy/place-policy.component';


import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { VenueServiceComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service.component';
// tslint:disable-next-line: max-line-length
import { VenueServiceGalleryComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-service-gallery.component';
// tslint:disable-next-line: max-line-length
import { VenueServicePackageComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-package/venue-service-package.component';
// tslint:disable-next-line: max-line-length

// tslint:disable-next-line: max-line-length
import { VenueServiceOptionComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-service-option/venue-service-option.component';
// tslint:disable-next-line: max-line-length
import { VenueGalleryOptionComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-gallery-option/venue-gallery-option.component';
import { TheRoyalGalleryComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-gallery-option/the-royal-gallery/the-royal-gallery.component';
import { TheVenuePolicyComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-gallery-option/the-venue-policy/the-venue-policy.component';
import { TheVenueGalleryComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-gallery-option/the-royal-gallery/the-venue-gallery/the-venue-gallery.component';
import { TheMapComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-gallery-option/the-map/the-map.component';
import { VenueFacilitiesComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-gallery-option/venue-facilities/venue-facilities.component';
import { VenueHallComponent } from './layout/main-layout/header/search-home/result-search/venue-service/venue-service-gallery/venue-gallery-option/venue-hall/venue-hall.component';
import { CoverageComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/gallery-option/coverage/coverage.component';
import { Ng5SliderModule } from 'ng5-slider';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';
import { HomeModule } from '../features/home/home.module';
// tslint:disable-next-line: max-line-length
import { CardServiceOptionComponent } from './layout/main-layout/header/search-home/result-search/catering-services/service-gallery/card-service-option/card-service-option.component';

import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { VenueResultComponent } from './layout/main-layout/header/search-home/result-search/venue-result/venue-result.component';
import { CateringResultComponent } from './layout/main-layout/header/search-home/result-search/catering-result/catering-result.component';
import { CateringResultUiComponent } from './layout/main-layout/header/search-home/result-search/catering-result/catering-result-ui/catering-result-ui.component';
import { VenueResultUiComponent } from './layout/main-layout/header/search-home/result-search/venue-result/venue-result-ui/venue-result-ui.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateAccountComponent } from './layout/main-layout/header/create-account/create-account.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SignInAccComponent } from './layout/main-layout/header/create-account/sign-in-acc/sign-in-acc.component';
import { SignUpAccComponent } from './layout/main-layout/header/create-account/sign-up-acc/sign-up-acc.component';
import { EditPasswordComponent } from './layout/main-layout/header/create-account/sign-in-acc/edit-password/edit-password.component';
import { NewSignInComponent } from './layout/main-layout/header/create-account/new-sign-in/new-sign-in.component';
@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    NavBarComponent,
    SearchHomeComponent,
    BrowseCategoriesUiComponent,
    NavbarKeywordsUiComponent,
    ResultSearchComponent,
    CateringServicesComponent,
    ServiceGalleryComponent,
    ServicePackageComponent,
    GalleryOptionComponent,
    RoyalGalleryComponent,
    HallPackageComponent,
    TheGalleryComponent,
    FacilitiesAndAmenitiesComponent,
    MapComponent,
    PlacePolicyComponent,
    VenueServiceComponent,
    VenueServiceGalleryComponent,
    VenueServicePackageComponent,
    VenueServiceOptionComponent,
    VenueGalleryOptionComponent,
    TheRoyalGalleryComponent,
    TheVenuePolicyComponent,
    TheVenueGalleryComponent,
    TheMapComponent,
    VenueFacilitiesComponent,
    VenueHallComponent,
    CoverageComponent,
    CardServiceOptionComponent,
    VenueResultComponent,
    CateringResultComponent,
    CateringResultUiComponent,
    VenueResultUiComponent,
    CreateAccountComponent,
    SignInAccComponent,
    SignUpAccComponent,
    EditPasswordComponent,
    NewSignInComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    NgxGalleryModule,
    FormsModule,
    AngularStickyThingsModule,
    Ng5SliderModule,
    CommonModule,
    // material
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatExpansionModule,
    ModalModule.forRoot(),
     BrowserAnimationsModule,
    // BsDatepickerModule.forRoot(),
    AccordionModule,
    CalendarModule,
    HomeModule,
    NgxPaginationModule,
    MatTabsModule
  ],
  providers: [
    MatDatepickerModule
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule { }
