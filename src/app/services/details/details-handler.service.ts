import { Injectable } from '@angular/core';
import {NamesGeneratorApiService, UserDetails} from "../../core/api-clients/names-generator/names-generator-api.service";
import {environment} from "../../../environments/environment";
import {SessionStorageService} from '../session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsHandlerService
{
  private _user: UserDetails = environment.defaultUser;

  constructor(
    private namesGeneratorApi: NamesGeneratorApiService,
    private sessionStorageService: SessionStorageService,
  ) {}

  get user(): UserDetails
  {
    if (this._user === environment.defaultUser && this.sessionStorageService.get('user') !== null)
    {
      this._user = this.sessionStorageService.get('user') || environment.defaultUser;
    }
    return this._user;
  }

  set user(value:UserDetails)
  {
    this.sessionStorageService.set('user', value);
    this._user = value;
  }

  public initRandomUser():void
  {
    this.namesGeneratorApi.getNamesList(1).subscribe(response => {
      this._user = response.results[0];
    });
  }
}
