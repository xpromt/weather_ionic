import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {DarkModeService} from "../../services/dark-mode-service/dark-mode-service.service";

@Component({
  selector: 'app-tabs-toolbar',
  templateUrl: './tabs-toolbar.component.html',
  styleUrls: ['./tabs-toolbar.component.scss'],
  standalone: true,
  imports: [IonicModule, TabsToolbarComponent],
})
export class TabsToolbarComponent  implements OnInit
{
  @Input() title: string = '';

  constructor(
    public darkModeService: DarkModeService
  ) { }

  ngOnInit() {}

  public toggleThemes($event: any) : void
  {
    this.darkModeService.isDarkMode = $event.detail.checked;
    document.body.classList.toggle('dark', $event.detail.checked);
  }
}
