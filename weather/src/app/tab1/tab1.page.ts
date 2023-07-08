import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { WeatherService } from '../services/weather.service';
import { Weather } from './weather';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})

export class Tab1Page implements OnInit {
  public weather: Array<Weather> | undefined 
  public temp = 0;
  public city = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getData().subscribe(result => {
      this.weather = result.weather;
      this.temp = result.main.temp;
      this.city = result.name;
      console.log(result);
    });
  }
}
