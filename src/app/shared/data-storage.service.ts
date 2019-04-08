import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { AdopteesService } from '../adoptees/adoptees.service';
import { ShelterListService } from '../shelter-list/shelter-list.service';

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
    // console.log(this.shelterService.getShelters());
    // return this.http.put(
    //   'https://shelters-a58f2.firebaseio.com/shelters.json',
    //   this.shelterService.getShelters()
    // )

    console.log(this.adopteesService.getAdoptees());

    return this.http.put(
      'https://shelters-a58f2.firebaseio.com/petAdoptions.json',
      this.adopteesService.getAdoptees()
    )

    //https://shelters-a58f2.firebaseio.com/

  }

}
