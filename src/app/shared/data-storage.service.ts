import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { AdopteesService } from '../adoptees/adoptees.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
    private adopteesService: AdopteesService) { }

  storeAdoptees() {
    console.log(this.adopteesService.getAdoptees());

    return this.http.put(
      'https://ng-pet-adoption.firebaseio.com/adoptions.json',
      this.adopteesService.getAdoptees());
  }

}
