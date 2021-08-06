import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { TransformTempPipe } from './transform-temp.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { CurrentCityComponent } from './current-city/current-city.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformTempPipe,
    NavbarComponent,
    SearchCityComponent,
    CurrentCityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
