import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from '../../components/intro/intro.component';
import { TabsToolbarComponent } from "../tabs-toolbar/tabs-toolbar.component";
import { WorldComponent } from '../../components/world/world.component';

@Component({
  selector: 'app-world-tab',
  templateUrl: 'world-tab.page.html',
  styleUrls: ['world-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, IntroComponent, TabsToolbarComponent, WorldComponent]
})
export class WorldTabPage {

  constructor() {}

}
