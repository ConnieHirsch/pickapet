import { Component, OnInit } from "@angular/core";
import { Shelter } from "../shared/shelter.model";
import { ShelterListService } from './shelter-list.service';

@Component({
  selector: "app-shelter-list",
  templateUrl: "./shelter-list.component.html",
  styleUrls: ["./shelter-list.component.css"]
})
export class ShelterListComponent implements OnInit {
  shelters: Shelter[];

  constructor(private shelterListService: ShelterListService) { }

  ngOnInit() {
    this.shelters = this.shelterListService.getShelters();
    this.shelterListService.shelterChanged
      .subscribe(
        (shelters: Shelter[]) => {
          this.shelters = shelters;
        }
      );
  }

}
