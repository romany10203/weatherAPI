import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-city',
  templateUrl: './current-city.component.html',
  styleUrls: ['./current-city.component.css']
})

export class CurrentCityComponent implements OnInit {

  lang:string = navigator.languages[1];
  cityWeather:any;
  dayData:any;
  hourData:any;
  country:any;
  done=false;
  daily=false;
  hourly=false;
  rotate:string;

  constructor(private _WeatherService:WeatherService) { 
    this.getData();
  }

  ngOnInit(): void {
  }

  getData():void{
    navigator.geolocation.getCurrentPosition((pos) => {
      this._WeatherService.getFromLocation(this.lang,pos.coords.latitude,pos.coords.longitude).subscribe(data=>{
        this.cityWeather=data;
        this.rotate='rotate('+this.cityWeather.current.wind_deg+'deg)';
        this.dayData=this.cityWeather.daily;
        this.hourData=(this.cityWeather.hourly).slice(0,24);
        this.done=true;
      })
    });
    navigator.geolocation.getCurrentPosition((pos) => {
      this._WeatherService.getFromLoc(this.lang,pos.coords.latitude,pos.coords.longitude).subscribe(data=>{
        this.country=data.name+", "+data.sys.country;
      })
    });
  }

}
