import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AnimationController, IonicModule} from '@ionic/angular';
import {UserDetails} from "../../core/api-clients/names-generator/names-generator-api.service";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {DetailsHandlerService} from "../../services/details/details-handler.service";
import {Animation} from "@ionic/core";
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [IonicModule, IntroComponent, NgIf, NgOptimizedImage, NgClass, FormsModule],
  providers: [
    DetailsHandlerService
  ]
})
export class IntroComponent implements AfterViewInit, OnInit
{
  @ViewChild('cardAnimated', {read: ElementRef}) ionCardAnimation: ElementRef;
  cardAnimation: Animation | undefined;

  @ViewChild('nextAnimated', {read: ElementRef}) ionNextAnimation: ElementRef;
  nextAnimation: Animation | undefined;

  public currentUser: UserDetails = this.renewUser();
  public isDetailsShows: boolean = false;

  constructor(
    public router: Router,
    private animationCtrl: AnimationController,
    private detailsHandlerService: DetailsHandlerService,
  ) {
  }

  ngAfterViewInit(): void
  {
    const cardAnimationRef: Element = this.ionCardAnimation.nativeElement;
    const nextAnimationRef: Element = this.ionNextAnimation.nativeElement;

    this.cardAnimation = this.animationCtrl.create('card-animation-identifier')
      .addElement(cardAnimationRef)
      .duration(500)
      .iterations(1)
      .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
      .fromTo('transform', 'translateX(50%) translateY(-50%) scale(0%)', 'translateX(0%) translateY(0%) scale(1)')
      .fromTo('opacity', '0', '1');

    this.nextAnimation = this.animationCtrl.create('next-animation-identifier')
      .addElement(nextAnimationRef)
      .duration(200)
      .iterations(1)
      .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
      .fromTo('transform', 'translateY(0%) scaleY(100%)', 'translateY(-50%) scaleY(0%)')
      .fromTo('opacity', '1', '0');
  }

  ngOnInit(): void
  {
    this.currentUser = this.renewUser();
  }

  getShortDate(date: string): string
  {
    return date.split('T')[0];
  }

  renewUser(): UserDetails
  {
    this.detailsHandlerService.initRandomUser();
    return this.detailsHandlerService.user;
  }

  toggleDetails() {
    this.isDetailsShows = !this.isDetailsShows;

    if (this.isDetailsShows)
    {
      this.cardAnimation?.direction('normal').play();
      this.nextAnimation?.direction('normal').play();
    }
    else
    {
      this.cardAnimation?.direction('reverse').play();
      this.nextAnimation?.direction('reverse').delay(1000).play();
    }
  }

  public changeUserName()
  {
    const newName: string = this.currentUser.name.first;
    this.currentUser = environment.unknownUser;
    this.currentUser.name.first = newName;
    this.detailsHandlerService.user = this.currentUser;
  }

  public setNewUser(): void
  {
    this.detailsHandlerService.user = this.currentUser;
  }
}
