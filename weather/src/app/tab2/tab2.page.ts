import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { WeatherService } from '../services/weather.service';
import { List, ResponseForecast } from './response';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class Tab2Page {
  public forecasts: Array<List> | undefined

  constructor(private weatherService: WeatherService, private route: Router) { }

  ngOnInit(): void {
    this.weatherService.getDataForecast().subscribe(result => {
      this.forecasts = result.list;
      console.log(result);
    });
  }

  formatDate(string: any) {
    const date = new Date(string * 1000); // Convert timestamp to milliseconds

    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      hour12: true
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
  }

  kelvinToCelsius(kelvin: number): number {
    const celsius = kelvin - 273.15;
    return Number(celsius.toFixed(2));
  }
  detailpage(w: List): void {

    let weather = {
      date: w.dt_txt,
      temp: w.main.temp,
      main: w.weather[0].main,
      desc: w.weather[0].description,
      icon: w.weather[0].icon
    }
    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(weather)
      }
    };
    this.route.navigate(['/detail'], extras);
  }
}
