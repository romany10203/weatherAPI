import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  public cityWeather:any;
  moreDays:any;
  foundCity=false;
  imgUrl:string="";
  rotate:string="";
  langs:any[]=[
    {count:"English",code:"en"},{count:"Afrikaans",code:"af"},{count:"Albanian",code:"al"},{count:"Arabic",code:"ar"},
    {count:"Azerbaijani",code:"az"},{count:"Bulgarian",code:"bg"},{count:"Catalan",code:"ca"},{count:"Czech",code:"cz"},
    {count:"Danish",code:"da"},{count:"German",code:"de"},{count:"Greek",code:"el"},{count:"Basque",code:"eu"},
    {count:"Persian (Farsi)",code:"fa"},{count:"Finnish",code:"fi"},{count:"French",code:"fr"},{count:"Galician",code:"gl"},
    {count:"Hebrew",code:"he"},{count:"Hindi",code:"hi"},{count:"Croatian",code:"hr"},{count:"Hungarian",code:"hu"},
    {count:"Indonesian",code:"id"},{count:"Italian",code:"it"},{count:"Japanese",code:"ja"},
    {count:"Korean",code:"kr"},{count:"Latvian",code:"la"},{count:"Lithuanian",code:"lt"},{count:"Macedonian",code:"mk"},
    {count:"Norwegian",code:"no"},{count:"Dutch",code:"nl"},{count:"Polish",code:"pl"},{count:"Portuguese",code:"pt"},
    {count:"Português Brasil",code:"pt_br"},{count:"Romanian",code:"ro"},{count:"Russian",code:"ru"},{count:"Swedish",code:"sv"},
    {count:"Slovak",code:"sk"},{count:"Slovenian",code:"sl"},{count:"Spanish",code:"sp"},{count:"Serbian",code:"sr"},
    {count:"Thai",code:"th"},{count:"Turkish",code:"tr"},{count:"Ukrainian",code:"uk"},{count:"Vietnamese",code:"vi"},
    {count:"Chinese Simplified",code:"zh_cn"},{count:"Chinese Traditional",code:"zh_tw"},{count:"Zulu",code:"zu"}
  ];

  constructor(private _WeatherService:WeatherService) { }

  ngOnInit(): void {
  }

  getWeatherData(e:any):void{
    this._WeatherService.city=e.target.value;
    this.sendReq();
  }

  sendReq():void{
    this._WeatherService.getData().subscribe({
      next:data => {
        if(data.cod==200){
          this.cityWeather = data;
        this.writeData();
        }
      },
      error: err => {
        if(err.status != 200){
          this.foundCity=false;
        }
      }
    });
  }

  changeLang(e:any):void{
    this._WeatherService.lang=this.langs[e.target.value].code;
      this.sendReq();
  }

  writeData():void{
    this.rotate='rotate('+this.cityWeather.wind.deg+'deg)';
    this.imgUrl="https://openweathermap.org/img/wn/"+this.cityWeather.weather[0].icon+"@2x.png";
    this._WeatherService.getMoreDays().subscribe({next: days => {this.moreDays = days.list}});
    this.foundCity=true;  
  }
}
