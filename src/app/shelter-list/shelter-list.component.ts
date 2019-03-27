import { Component, OnInit } from "@angular/core";
import { Shelter } from "../shared/shelter.model";

@Component({
  selector: "app-shelter-list",
  templateUrl: "./shelter-list.component.html",
  styleUrls: ["./shelter-list.component.css"]
})
export class ShelterListComponent implements OnInit {
  shelters: Shelter[] = [
    new Shelter(
      "Greater Derry Humane Society",
      "Some Street",
      "Derry",
      "NH",
      "02144",
      "555-555-5555",
      "gdhs@gmail.com"
    ),
    new Shelter(
      "Angel Memorial Shelter",
      "Some Street",
      "Boston",
      "MA",
      "02144",
      "555-555-5555",
      "angell@gmail.com"
    ),
    new Shelter(
      "Mournful Paws",
      "39 Sycamore Street",
      "Somerville",
      "MA",
      "02143",
      "555-555-5555",
      "theodosia@gmail.com"
    )
  ];

  constructor() { }

  ngOnInit() { }

  onShelterAdded(shelter: Shelter) {
    this.shelters.push(shelter);
  }
}
