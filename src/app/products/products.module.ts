import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AcComponent } from './ac/ac.component';
import { BooksComponent } from './books/books.component';
import { ComputersComponent } from './computers/computers.component';
import { FridgeComponent } from './fridge/fridge.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MenComponent } from './men/men.component';
import { WomanComponent } from './woman/woman.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TvComponent } from './tv/tv.component';
import { WatchComponent } from './watch/watch.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { ProdataComponent } from './prodata/prodata.component';
import { MobileInfoComponent } from './mobile-info/mobile-info.component';


@NgModule({
  declarations: [
    AcComponent,
    BooksComponent,
    ComputersComponent,
    FridgeComponent,
    FurnitureComponent,
    KitchenComponent,
    MenComponent,
    WomanComponent,
    MobilesComponent,
    TvComponent,
    WatchComponent,
    SpeakerComponent,
    ProdataComponent,
    MobileInfoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
