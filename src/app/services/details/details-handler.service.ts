import { Injectable } from '@angular/core';
import {NamesGeneratorApiService, UserDetails} from "../../core/api-clients/names-generator/names-generator-api.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DetailsHandlerService
{
  constructor(
    private namesGeneratorApi: NamesGeneratorApiService,
  ) {}

  private _user: UserDetails = environment.defaultUser;

  get user(): UserDetails
  {
    return this._user;
  }

  set user(value:UserDetails)
  {
    this._user = value;
  }

  public initRandomUser():void
  {
    this.namesGeneratorApi.getNamesList(1).subscribe(response => {
      this._user = response.results[0];
    });
  }
}
