import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NamesGeneratorApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNamesList(namesQuantity: number): Observable<any>
  {
    return this.httpClient.get<any>
    ('https://randomuser.me/api/?results='+namesQuantity,
    );
  }
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Registered {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserDetails
{
  gender: string;
  name: Name;
  location: {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
  };
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}
