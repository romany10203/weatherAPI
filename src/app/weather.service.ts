import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  currentDate = new Date();

  constructor(private _HttpClient:HttpClient) { }
  getData(city:string):Observable<any>{
    return this._HttpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=381f7fa852fd5ee7732a8f03d1c2359d`);
  }
  getMoreDays(city:string):Observable<any>{
       return this._HttpClient.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=4&appid=381f7fa852fd5ee7732a8f03d1c2359d`)
  }
}
