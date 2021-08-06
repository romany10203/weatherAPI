import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { SearchCityComponent } from '../search-city/search-city.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 60000);
  }
}
