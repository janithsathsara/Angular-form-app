import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  readonly url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(
    id: number,
  ): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const dataLocation = await data.json();
    return dataLocation[0] ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // console.log(
    //   `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    // );
    console.log(firstName, lastName, email);
  }
}
