import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultSearchComponent } from './core/layout/main-layout/header/search-home/result-search/result-search.component';
import { VenueServiceComponent } from './core/layout/main-layout/header/search-home/result-search/venue-service/venue-service.component';
// tslint:disable-next-line: max-line-length
import { CateringServicesComponent } from './core/layout/main-layout/header/search-home/result-search/catering-services/catering-services.component';

import { WeddingPageComponent } from './features/home/events-container/events-ui/wedding-page/wedding-page.component';
import { ResultsPackageComponent } from './features/home/catering/results-package/results-package.component';
import { CateringResultComponent } from './core/layout/main-layout/header/search-home/result-search/catering-result/catering-result.component';
import { VenueResultComponent } from './core/layout/main-layout/header/search-home/result-search/venue-result/venue-result.component';
import { GloriesPackageComponent } from './features/home/catering/glories-package/glories-package.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'CateringServices', component: CateringServicesComponent
  },
  {
    path: 'VenueServices', component: VenueServiceComponent
  },
  {
    path: 'catering/result', component: CateringResultComponent
  },
  {
    path: 'venue/result', component: VenueResultComponent
  },
  {
    path: 'Wedding', component: WeddingPageComponent
  },
  {
    path: 'ResultsPackage', component: ResultsPackageComponent
  },
  {
    path: 'GloriesPackage', component: GloriesPackageComponent
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./core/layout/main-layout/header/acc-setting/wishlist/wishlist.module').then((m) => m.WishlistModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
