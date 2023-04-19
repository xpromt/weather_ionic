import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-launch',
  templateUrl: 'launch.page.html',
  styleUrls: ['launch.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class launchPage {

  constructor() {}

}
