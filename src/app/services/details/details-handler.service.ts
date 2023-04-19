import { Injectable } from '@angular/core';
import {NamesGeneratorApiService, User} from "../../core/api-clients/names-generator/names-generator-api.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DetailsHandlerService
{
  constructor(
    private namesGeneratorApi: NamesGeneratorApiService,
  ) {}

  private _user: User = environment.defaultUser;

  get user(): User
  {
    return this._user;
  }

  set user(value:User)
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
