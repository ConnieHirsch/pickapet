import { Shelter } from '../shared/shelter.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShelterListService {
  shelterChanged = new EventEmitter<Shelter[]>();
  startedEditing = new Subject<number>();

  private shelters: Shelter[] = [
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

  getShelters() {
    return this.shelters.slice();
  }

  getShelter(index: number) {
    return this.shelters[index];
  }

  addShelter(shelter: Shelter) {
    this.shelters.push(shelter);
    this.shelterChanged.emit(this.shelters.slice());
  }

  updateShelter(index: number, newShelter: Shelter) {
    this.shelters[index] = newShelter;
    this.shelterChanged.next(this.shelters.slice());
  }
}
