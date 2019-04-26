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
      "gdhs@gmail.com",
      'http://www.constancehirsch.com/test/Derry'
    ),
    new Shelter(
      "Angel Memorial Shelter",
      "Some Street",
      "Boston",
      "MA",
      "02144",
      "555-555-5555",
      "angell@gmail.com",
      'http://www.constancehirsch.com/test/Angel'
    ),
    new Shelter(
      "Mournful Paws",
      "39 Sycamore Street",
      "Somerville",
      "MA",
      "02143",
      "555-555-5555",
      "theodosia@gmail.com",
      'http://www.constancehirsch.com/test/Paws'
    )
  ];

  setShelters(shelters: Shelter[]) {
    console.log(shelters);
    this.shelters = shelters;
    this.shelterChanged.next(this.shelters.slice());
  }

  betterShelterNames() {
    var sNames = new Array();
    let i: number;
    for (let i in this.shelters) {
      var sn = { shelter: this.shelters[i].name, url: this.shelters[i].url };
      console.log(sn);
      sNames.push(sn);
    }
    return sNames;
  }

  getShelterNames() {
    var sNames = new Array();
    let i: number;
    for (let i in this.shelters) {
      let iName = this.shelters[i].name;
      //console.log("Test # " + i + ": " + iName);
      //return null;
      sNames.push(iName);
      //return sNames;
    }
    return sNames;
  }

  findUrlbyShelterName(shelterName: string): string {
    let results = this.shelters.filter((name) => name.name === shelterName);
    return results.length === 1 ? results[0].url : '';
  }
  // findCountryCodeByCountryName(countryName: string): string {
  //   let results = this.countries.filter((country) => country.countryName === countryName);
  //   return results.length === 1 ? results[0].countryCode : '';
  // }


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

  deleteShelter(index: number) {
    this.shelters.splice(index, 1);
    this.shelterChanged.next(this.shelters.slice());
  }
}
