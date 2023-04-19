import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from './intro/intro.component';
import {TabsToolbarComponent} from "../tabs-toolbar/tabs-toolbar.component";

@Component({
  selector: 'app-hello-tab',
  templateUrl: 'hello-tab.page.html',
  styleUrls: ['hello-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, IntroComponent, TabsToolbarComponent],
})
export class HelloTabPage {
  constructor() {}
}
