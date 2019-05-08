import { Component, HostListener } from "@angular/core";
import { Response } from "@angular/http";

import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  // navbar collapse for menu
  public isCollapsed = false;
  screenHeight: any;
  screenWidth: any;

  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService
  ) {
    this.onResize();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth == 768) {
      console.log(this.screenHeight, this.screenWidth);
    }
    if (this.screenWidth > 768) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }
  onSaveData() {
    this.dataStorageService.storeAdoptees().subscribe((response: Response) => {
      console.log(response);
    });
    this.dataStorageService.storeShelters().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dataStorageService.fetchPets();
    this.dataStorageService.fetchShelters();
  }

  onLogout() {
    this.authService.logout();
  }
}
