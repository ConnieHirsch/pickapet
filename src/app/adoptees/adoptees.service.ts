import { Adoptees } from "./adoptees.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class AdopteesService {
  adopteesChanged = new Subject<Adoptees[]>();
  adopteesSelected = new EventEmitter<Adoptees>();

  private adoptees: Adoptees[] = [
    new Adoptees(
      "A Dogue",
      "http://place-puppy.com/200x200",
      "This is a new dogue entry",
      "Dog",
      "Mutt",
      2,
      "Greater Derry Humane Society",
      "http://www.constancehirsch.com/test.html?pet=Dogue"
    ),
    new Adoptees(
      "Kitty Deadpool",
      "http://placekitten.com/210/204",
      "This is a new kitten entry",
      "Cat",
      "House",
      1,
      "Greater Derry Humane Society",
      "http://www.constancehirsch.com/test.html?pet=Kitty"
    ),
    new Adoptees(
      "Murder Biscuit",
      "http://placekitten.com/250/250",
      "A cat to beware of",
      "Cat",
      "Siamese",
      12,
      "Angel Memorial Shelter",
      "http://www.constancehirsch.com/test.html?pet=Biscuit"
    )
  ];

  setAdoptees(adoptees: Adoptees[]) {
    console.log(adoptees);
    this.adoptees = adoptees;
    this.adopteesChanged.next(this.adoptees.slice());
  }

  getAdoptees() {
    return this.adoptees.slice();
  }
  getAdoptee(index: number) {
    return this.adoptees[index];
  }

  addAdoptee(adoptee: Adoptees) {
    console.log(adoptee);
    this.adoptees.push(adoptee);
    this.adopteesChanged.next(this.adoptees.slice());
  }

  updateAdoptee(index: number, newAdoptee: Adoptees) {
    console.log(newAdoptee);
    this.adoptees[index] = newAdoptee;
    this.adopteesChanged.next(this.adoptees.slice());
  }

  deleteAdoptee(index: number) {
    this.adoptees.splice(index, 1);
    this.adopteesChanged.next(this.adoptees.slice());
  }

  getImages() {
    let iPaths = new Array();
    let i: number;
    for (let i in this.adoptees) {
      let iPath = <string>this.adoptees[i].imagePath;
      iPaths.push(iPath);
    }
    let final = <Array<string>>iPaths;
    console.log("iPaths: " + final);
    return final;
  }
}
