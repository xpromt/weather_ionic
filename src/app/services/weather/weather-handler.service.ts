import { Injectable } from '@angular/core';
import { CityWeatherApiService } from '../../core/api-clients/city-weather/city-weather-api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherHandlerService
{
  private _city: string = 'London';
  private _weather: any = null;

  constructor(
    private cityWeatherApiService: CityWeatherApiService,
  ) { }

  get city(): string
  {
    return this._city;
  }

  set city(value: string)
  {
    this._city = value;
  }

  get weather(): any
  {
    return this._weather;
  }

  refreshWeather(): void
  {
    this.cityWeatherApiService.getCurrentWeather(this._city).subscribe(response =>
    {
      this._weather = response;
    });
  }
}
