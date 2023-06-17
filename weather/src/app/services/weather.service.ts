import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ResponWeather } from '../tab1/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'b014ed782a8129bd3f8401ec75037ac3';
  city = 'Sleman';

  constructor(private http: HttpClient) { }

  getData(): Observable<ResponWeather> {
    return this.http.get<ResponWeather>(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }
}