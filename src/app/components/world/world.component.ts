import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DetailsHandlerService} from '../../services/details/details-handler.service';
import {IntroComponent} from '../intro/intro.component';

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
export class WorldComponent  implements OnInit {

  constructor(
    public detailsHandlerService: DetailsHandlerService
  ) { }

  ngOnInit() {}

  public showWeather()
  {

  }

  public changeCity()
  {

  }
}
