import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CryptoMetaService } from './home/home.service';
import { NewsComponent } from './news/news.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NewsService } from './news/news.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    SpinnerComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    CryptoMetaService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
