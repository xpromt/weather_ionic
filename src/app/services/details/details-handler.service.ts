import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsHandlerService
{
  constructor() {
  }

  private _name:string = '';
  private _place:string = '';

  get name():string
  {
    return this._name;
  }

  set name(value:string)
  {
    this._name = value;
  }

  public initRandomName():void
  {
    this._name = 'Random Name';
  }

  get place():string
  {
    return this._place;
  }

  set place(value:string)
  {
    this._place = value;
  }
}
