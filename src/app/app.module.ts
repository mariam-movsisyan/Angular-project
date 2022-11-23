import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CompanyComponent } from './components/company/company.component';
import { ContentComponent } from './components/content/content.component';
import { GiftIdeaComponent } from './components/gift-idea.component/giftIdea.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/items/item.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { DescriptionComponent } from './components/product-description/description.component';
import { ProductComponent } from './components/products/product.component';
import { OffersComponent } from './components/profitable_offers/offers.component';
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        MenuComponent,
        BannerComponent,
        ProductComponent,
        AboutComponent,
        ContentComponent,
        OffersComponent,
        DescriptionComponent,
        GiftIdeaComponent,
        CollectionComponent,
        BrandsComponent,
        CompanyComponent,
        ItemComponent,
        AboutUsComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
