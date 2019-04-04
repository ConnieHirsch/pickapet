import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AdopteesService } from '../adoptees/adoptees.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
    private adopteesService: AdopteesService) { }

  storeAdoptees() {
    return this.httpClient.put(
      'https://ng-pet-adoption.firebaseio.com/adoptions.json',
      this.adopteesService.getAdoptees());
  }

}
