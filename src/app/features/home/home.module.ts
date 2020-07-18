import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { VenuesComponent } from './venues/venues.component';
import { CateringComponent } from './catering/catering.component';
import { DiscoverByCitiesComponent } from './discover-by-cities/discover-by-cities.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { BannerUiComponent } from './banner/banner-ui/banner-ui.component';
import { ExploreCategoriesComponent } from './explore-categories/explore-categories.component';
import { ExploreCategoriesUiComponent } from './explore-categories/explore-categories-ui/explore-categories-ui.component';
import { EventsContainerComponent } from './events-container/events-container.component';
import { EventsUiComponent } from './events-container/events-ui/events-ui.component';
import { VenuesUiComponent } from './venues/venues-ui/venues-ui.component';
import { CateringUiComponent } from './catering/catering-ui/catering-ui.component';
import { DiscoverByCitiesUiComponent } from './discover-by-cities/discover-by-cities-ui/discover-by-cities-ui.component';
import { DiscoverMoreContainerComponent } from './discover-more-container/discover-more-container.component';
import { DiscoverMoreUiComponent } from './discover-more-container/discover-more-ui/discover-more-ui.component';
import { BlogContainerComponent } from './blog-container/blog-container.component';
import { BlogUiComponent } from './blog-container/blog-ui/blog-ui.component';
import { WeddingPageComponent } from './events-container/events-ui/wedding-page/wedding-page.component';
import { VenueUiComponent } from './events-container/events-ui/wedding-page/venue-ui/venue-ui.component';
import { TheCateringUiComponent } from './events-container/events-ui/wedding-page/the-catering-ui/the-catering-ui.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CardServicesComponent } from './card-services/card-services.component';
import { VerticalCardServicesComponent } from './vertical-card-services/vertical-card-services.component';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import localeAr from '@angular/common/locales/ar-EG';
registerLocaleData(localeAr, 'ar-EG');
import { MatInputModule } from '@angular/material/input';
import { ResultsPackageComponent } from './catering/results-package/results-package.component';
import { VerticalCardVenueServicesComponent } from './vertical-card-venue-services/vertical-card-venue-services.component';
import { GloriesPackageComponent } from './catering/glories-package/glories-package.component';
import { GloriesCardComponent } from './catering/glories-package/glories-card/glories-card.component';
import { PackageContainComponent } from './catering/glories-package/package-contain/package-contain.component';
import { GloriesAddOnsComponent } from './catering/glories-package/glories-add-ons/glories-add-ons.component';
import { PackageContainGloriesCardComponent } from './package-contain-glories-card/package-contain-glories-card.component';
import { AddOnsCardComponent } from './add-ons-card/add-ons-card.component';
import { TheFilterComponent } from './catering/results-package/the-filter/the-filter.component';
import { ResultsPackageContentComponent } from './catering/results-package/results-package-content/results-package-content.component';
import { ResultsPackageCarrdComponent } from './results-package-carrd/results-package-carrd.component';
import { ResultsPackageVerticalComponent } from './results-package-vertical/results-package-vertical.component';
import { TheVerticalCateringResultComponent } from './the-vertical-catering-result/the-vertical-catering-result.component';
import { TheHorizentalCateringResultComponent } from './the-horizental-catering-result/the-horizental-catering-result.component';
import { TheHorizentalVenueResultComponent } from './the-horizental-venue-result/the-horizental-venue-result.component';
import { TheVerticalVenueResultComponent } from './the-vertical-venue-result/the-vertical-venue-result.component';
@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ExploreCategoriesComponent,
    VenuesComponent,
    CateringComponent,
    DiscoverByCitiesComponent,
    NewBlogComponent,
    BannerUiComponent,
    ExploreCategoriesUiComponent,
    EventsContainerComponent,
    EventsUiComponent,
    VenuesUiComponent,
    CateringUiComponent,
    DiscoverByCitiesUiComponent,
    DiscoverMoreContainerComponent,
    DiscoverMoreUiComponent,
    BlogContainerComponent,
    BlogUiComponent,
    WeddingPageComponent,
    VenueUiComponent,
    TheCateringUiComponent,
    CardServicesComponent,
    VerticalCardServicesComponent,
    ResultsPackageComponent,
    VerticalCardVenueServicesComponent,
    GloriesPackageComponent,
    GloriesCardComponent,
    PackageContainComponent,
    GloriesAddOnsComponent,
    PackageContainGloriesCardComponent,
    AddOnsCardComponent,
    TheFilterComponent,
    ResultsPackageContentComponent,
    ResultsPackageCarrdComponent,
    ResultsPackageVerticalComponent,
    TheVerticalCateringResultComponent,
    TheHorizentalCateringResultComponent,
    TheHorizentalVenueResultComponent,
    TheVerticalVenueResultComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
    Ng5SliderModule,
    MatDatepickerModule,
    FormsModule,
    CommonModule,
    AccordionModule,
    CalendarModule,
    MatInputModule
  ],
  exports: [
    CardServicesComponent,
    VerticalCardServicesComponent,
    PackageContainGloriesCardComponent,
    AddOnsCardComponent,
    ResultsPackageCarrdComponent,
    ResultsPackageVerticalComponent,
    VerticalCardVenueServicesComponent,
    TheVerticalCateringResultComponent,
    TheHorizentalCateringResultComponent,
    TheHorizentalVenueResultComponent,
    TheVerticalVenueResultComponent,
  ]
})
export class HomeModule { }
