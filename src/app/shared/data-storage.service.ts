import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { AdopteesService } from '../adoptees/adoptees.service';
import { ShelterListService } from '../shelter-list/shelter-list.service';
import { Adoptees } from '../adoptees/adoptees.model';
import { Shelter } from './shelter.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
    private adopteesService: AdopteesService,
    private shelterService: ShelterListService,
    private authService: AuthService) { }

  storeAdoptees() {
    const token = this.authService.getToken();

    console.log(this.adopteesService.getAdoptees());

    return this.http.put(
      'https://shelters-a58f2.firebaseio.com/petAdoptions.json?auth=' + token,
      //      'https://ng-pet-adoption.firebaseio.com/adoptions.json',
      this.adopteesService.getAdoptees());
  }

  storeShelters() {
    const token = this.authService.getToken();

    console.log(this.shelterService.getShelters());
    return this.http.put(
      'https://shelters-a58f2.firebaseio.com/shelters.json?auth=' + token,
      this.shelterService.getShelters()
    )
  }
  //https://shelters-a58f2.firebaseio.com/



  fetchPets() {
    const token = this.authService.getToken();

    this.http.get(
      'https://shelters-a58f2.firebaseio.com/petAdoptions.json?auth=' + token)
      .subscribe(
        (response: Response) => {
          const adoptees: Adoptees[] = response.json();
          this.adopteesService.setAdoptees(adoptees);
        }
      )


  }

  fetchShelters() {
    const token = this.authService.getToken();

    this.http.get(
      'https://shelters-a58f2.firebaseio.com/shelters.json?auth=' + token)
      .subscribe(
        (response: Response) => {
          const shelters: Shelter[] = response.json();
          this.shelterService.setShelters(shelters);
        }
      )
  }

}
