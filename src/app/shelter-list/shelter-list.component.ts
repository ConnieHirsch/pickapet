import { Component, OnInit, OnDestroy } from "@angular/core";
import { Shelter } from "../shared/shelter.model";
import { ShelterListService } from './shelter-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-shelter-list",
  templateUrl: "./shelter-list.component.html",
  styleUrls: ["./shelter-list.component.css"]
})
export class ShelterListComponent implements OnInit, OnDestroy {
  shelters: Shelter[];
  private subscription: Subscription;

  constructor(private shelterListService: ShelterListService) { }

  ngOnInit() {
    this.shelters = this.shelterListService.getShelters();
    this.subscription = this.shelterListService.shelterChanged
      .subscribe(
        (shelters: Shelter[]) => {
          this.shelters = shelters;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
