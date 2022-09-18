import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopAddComponent } from './shop-add/shop-add.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopListComponent,
    ShopAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule,
    NgbRatingModule,
    GooglePlaceModule,
  ]
})
export class ShopModule { }
