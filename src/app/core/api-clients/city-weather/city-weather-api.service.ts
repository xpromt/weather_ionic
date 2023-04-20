import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherApiService {

  private apiUrl: string = 'https://api.weatherapi.com/v1';
  private apiKey: string = environment.weatherApiKey;


  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrentWeather(location: string): Observable<any> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${location}`;
    return this.httpClient.get(url).pipe(map(result => result));
  }

  getForecast(location: string): Observable<any> {
    const url = `${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=7`;
    return this.httpClient.get(url).pipe(map(result => result));
  }

}
