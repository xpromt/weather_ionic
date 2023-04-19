import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from '../../components/intro/intro.component';
import {TabsToolbarComponent} from "../tabs-toolbar/tabs-toolbar.component";

@Component({
  selector: 'app-result-tab',
  templateUrl: 'result-tab.page.html',
  styleUrls: ['result-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, IntroComponent, TabsToolbarComponent],
})
export class ResultTabPage {
  constructor() {}
}
