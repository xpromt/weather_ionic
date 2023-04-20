import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DetailsHandlerService} from '../../services/details/details-handler.service';
import {IntroComponent} from '../intro/intro.component';
import {WeatherHandlerService} from '../../services/weather/weather-handler.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  standalone: true,
  imports: [IonicModule, IntroComponent, NgIf, NgOptimizedImage, NgClass, FormsModule],
  providers: [
    DetailsHandlerService
  ]
})
export class WorldComponent  implements OnInit
{
  public currentWeather: any = null;

  constructor(
    public detailsHandlerService: DetailsHandlerService,
    public weatherHandlerService: WeatherHandlerService
  ) { }

  ngOnInit() {
    this.showWeather();
    console.log(this.detailsHandlerService.user)
  }

  public showWeather()
  {
    this.weatherHandlerService.city = this.detailsHandlerService.user.location.city;
    this.weatherHandlerService.refreshWeather();
    this.currentWeather = this.weatherHandlerService.weather;
  }

  public changeCity()
  {

  }
}
