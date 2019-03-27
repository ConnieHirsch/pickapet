import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Adoptees } from '../adoptees.model';
import { AdopteesService } from '../adoptees.service';

@Component({
  selector: 'app-adoptees-list',
  templateUrl: './adoptees-list.component.html',
  styleUrls: ['./adoptees-list.component.css']
})
export class AdopteesListComponent implements OnInit {
  @Output() adopteeWasSelected = new EventEmitter<Adoptees>();

  adoptees: Adoptees[];

  constructor(private adopteesService: AdopteesService) { }

  ngOnInit() {
    this.adoptees = this.adopteesService.getAdoptees();
  }

  onAdopteeSelected(adoptee: Adoptees) {
    console.log('onAdopteeSelected');
    this.adopteeWasSelected.emit(adoptee);
  }
}
