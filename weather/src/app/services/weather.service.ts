import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseWeather } from '../tab1/weather';
import { ResponseForecast } from '../tab2/response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = '5a9df04efb69fd310294ba6298d05db6';
  city = 'Sleman';

  constructor(private http: HttpClient) { }

  getData(): Observable<ResponseWeather> {
    return this.http.get<ResponseWeather>(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }

  getDataForecast(): Observable<ResponseForecast> {
    return this.http.get<ResponseForecast>(`${this.url}forecast?q=${this.city}&appid=${this.key}`);
  }
}
