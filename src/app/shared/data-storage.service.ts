import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { AdopteesService } from '../adoptees/adoptees.service';
import { ShelterListService } from '../shelter-list/shelter-list.service';
import { Adoptees } from '../adoptees/adoptees.model';
import { Shelter } from './shelter.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
    private adopteesService: AdopteesService,
    private shelterService: ShelterListService) { }

  storeAdoptees() {
    console.log(this.adopteesService.getAdoptees());

    return this.http.put(
      'https://shelters-a58f2.firebaseio.com/petAdoptions.json',
      //      'https://ng-pet-adoption.firebaseio.com/adoptions.json',
      this.adopteesService.getAdoptees());
  }

  storeShelters() {
    console.log(this.shelterService.getShelters());
    return this.http.put(
      'https://shelters-a58f2.firebaseio.com/shelters.json',
      this.shelterService.getShelters()
    )
  }
  //https://shelters-a58f2.firebaseio.com/



  fetchPets() {
    this.http.get(
      'https://shelters-a58f2.firebaseio.com/petAdoptions.json')
      .subscribe(
        (response: Response) => {
          const adoptees: Adoptees[] = response.json();
          this.adopteesService.setAdoptees(adoptees);
        }
      )


  }

  fetchShelters() {
    this.http.get(
      'https://shelters-a58f2.firebaseio.com/shelters.json')
      .subscribe(
        (response: Response) => {
          const shelters: Shelter[] = response.json();
          this.shelterService.setShelters(shelters);
        }
      )
  }

}
