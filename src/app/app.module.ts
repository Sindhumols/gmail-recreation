import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FeaturesliderComponent } from './featureslider/featureslider.component';
import { DownloadkeyComponent } from './downloadkey/downloadkey.component';
import { BannerComponent } from './banner/banner.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { SliderComponent } from './slider/slider.component';
import { SuspiciousComponent } from './suspicious/suspicious.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesliderComponent,
    DownloadkeyComponent,
    BannerComponent,
    ProductGridComponent,
    SliderComponent,
    SuspiciousComponent,
    CreateAccountComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
