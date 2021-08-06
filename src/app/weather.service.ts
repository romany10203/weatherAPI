import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  city!: string;
  lang:string="en";

  constructor(private _HttpClient:HttpClient) { }
  getData():Observable<any>{
    return this._HttpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=${this.lang}&appid=381f7fa852fd5ee7732a8f03d1c2359d`);
  }

  getMoreDays():Observable<any>{
       return this._HttpClient.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&lang=${this.lang}&cnt=4&appid=381f7fa852fd5ee7732a8f03d1c2359d`)
  }

  getFromLocation(lang:string,lat:any,lon:any):Observable<any>{
    return this._HttpClient.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${lang}&appid=381f7fa852fd5ee7732a8f03d1c2359d`);
  }
  
  getFromLoc(lang:string,lat:any,lon:any):Observable<any>{
    return this._HttpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&appid=381f7fa852fd5ee7732a8f03d1c2359d`);
  }

}

// https://api.openweathermap.org/data/2.5/onecall?lat=29.953756400000003&lon=31.5370003&appid=381f7fa852fd5ee7732a8f03d1c2359d
// http://api.openweathermap.org/data/2.5/weather?lat=29.953756400000003&lon=31.5370003&appid=381f7fa852fd5ee7732a8f03d1c2359d