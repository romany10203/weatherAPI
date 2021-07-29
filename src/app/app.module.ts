import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { SearchCityComponent } from './search-city/search-city.component';
import { TransformTempPipe } from './transform-temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchCityComponent,
    TransformTempPipe
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
