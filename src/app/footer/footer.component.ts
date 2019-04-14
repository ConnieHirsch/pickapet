import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private dataStorageService: DataStorageService,
    public authService: AuthService) { }

  onSaveData() {
    this.dataStorageService.storeAdoptees()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.dataStorageService.storeShelters()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.fetchPets();
    this.dataStorageService.fetchShelters();
  }

  onLogout() {
    this.authService.logout();
  }
}

