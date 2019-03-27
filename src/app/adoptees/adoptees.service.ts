import { Adoptees } from './adoptees.model';
import { EventEmitter } from '@angular/core';

export class AdopteesService {
  adopteesSelected = new EventEmitter<Adoptees>();

  private adoptees: Adoptees[] = [
    new Adoptees(
      'A Dogue',
      'This is a new dogue entry',
      'http://place-puppy.com/200x200',
      'Dog',
      'Mutt',
      2
    ),
    new Adoptees(
      'Kitty Deadpool',
      'This is a new kitten entry',
      'http://placekitten.com/200/300',
      'Cat',
      'House',
      1
    )
  ];

  getAdoptees() {
    return this.adoptees.slice();
  }
}
