import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  cityWeather:any;
  moreDays:any;
  foundCity=false;
  currentDate = new Date();
  imgUrl:string="";
  rotate:string="";

  constructor(private _WeatherService:WeatherService) { }

  ngOnInit(): void {
  }

  getWeatherData(e:any):void{
    this._WeatherService.getData(e.target.value).subscribe({
      next:data => {
        if(data.cod==200){
          this.cityWeather = data;
          this.rotate='rotate('+this.cityWeather.wind.deg+'deg)';
          this.imgUrl="https://openweathermap.org/img/wn/"+this.cityWeather.weather[0].icon+"@2x.png";
          this._WeatherService.getMoreDays(this.cityWeather.name).subscribe({next: days => {this.moreDays = days.list}});
          this.foundCity=true;        
        }
      },
      error: err => {
        if(err.status != 200){
          this.foundCity=false;
        }
      }
    });
  }
}
