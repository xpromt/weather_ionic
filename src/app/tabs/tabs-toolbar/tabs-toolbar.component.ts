import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {DarkModeService} from "../../services/dark-mode-service/dark-mode-service.service";
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs-toolbar',
  templateUrl: './tabs-toolbar.component.html',
  styleUrls: ['./tabs-toolbar.component.scss'],
  standalone: true,
  imports: [IonicModule, TabsToolbarComponent, NgIf],
})
export class TabsToolbarComponent  implements OnInit
{
  @Input() isMain: boolean = false;
  @Input() title: string = '';

  constructor(
    public router: Router,
    public darkModeService: DarkModeService
  ) { }

  ngOnInit() {}

  public toggleThemes($event: any) : void
  {
    this.darkModeService.isDarkMode = $event.detail.checked;
    document.body.classList.toggle('dark', $event.detail.checked);
  }
}
