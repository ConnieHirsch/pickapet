import { Component, OnInit } from '@angular/core';
import { Adoptees } from './adoptees.model';

@Component({
  selector: 'app-adoptees',
  templateUrl: './adoptees.component.html',
  styleUrls: ['./adoptees.component.css']
})
export class AdopteesComponent implements OnInit {
  selectedAdoptee: Adoptees;

  constructor() { }

  ngOnInit() {
  }

}
