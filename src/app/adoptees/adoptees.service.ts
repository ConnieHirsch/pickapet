import { Adoptees } from './adoptees.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class AdopteesService {
  adopteesChanged = new Subject<Adoptees[]>();
  adopteesSelected = new EventEmitter<Adoptees>();

  private adoptees: Adoptees[] = [
    new Adoptees(
      'A Dogue',
      'http://place-puppy.com/200x200',
      'This is a new dogue entry',
      'Dog',
      'Mutt',
      2,
      'Greater Derry Humane Society'
    ),
    new Adoptees(
      'Kitty Deadpool',
      'http://placekitten.com/200/300',
      'This is a new kitten entry',
      'Cat',
      'House',
      1,
      'Greater Derry Humane Society'
    ),
    new Adoptees(
      'Murder Biscuit',
      'http://placekitten.com/300/300',
      'A cat to beware of',
      'Cat',
      'Siamese',
      12,
      'Angel Memorial Shelter'
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
}
