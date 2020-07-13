import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistRoutingModule } from './wishlist-routing.module';

// components
import { WishlistComponent } from './wishlist.component';
import { TheAccSettingComponent } from './the-acc-setting/the-acc-setting.component';
import { WishlistItemComponent } from './wishlist-item/wishlist-item.component';
import { TheReservationsComponent } from './the-reservations/the-reservations.component';
import { AdressesSettingComponent } from './the-acc-setting/adresses-setting/adresses-setting.component';
import { ProfileSettingComponent } from './the-acc-setting/profile-setting/profile-setting.component';
import { PaymentSettingComponent } from './the-acc-setting/payment-setting/payment-setting.component';

// material
import { MatIconModule } from '@angular/material/icon';
import { UnfinishedComponent } from './the-reservations/unfinished/unfinished.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeModule } from 'src/app/features/home/home.module';
import { OrdersReservationComponent } from './the-reservations/orders-reservation/orders-reservation.component';

@NgModule({
  declarations: [
    WishlistComponent,
    TheAccSettingComponent,
    WishlistItemComponent,
    TheReservationsComponent,
    AdressesSettingComponent,
    PaymentSettingComponent,
    ProfileSettingComponent,
    UnfinishedComponent,
    OrdersReservationComponent,

  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    TabsModule.forRoot(),

    // material
    MatIconModule,
    HomeModule
  ],
  
})

export class WishlistModule { }
