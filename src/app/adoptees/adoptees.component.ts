import { Component, OnInit } from '@angular/core';
import { Adoptees } from './adoptees.model';
import { AdopteesService } from './adoptees.service';

@Component({
  selector: 'app-adoptees',
  templateUrl: './adoptees.component.html',
  styleUrls: ['./adoptees.component.css']
})
export class AdopteesComponent implements OnInit {
  selectedAdoptee: Adoptees;

  constructor(private adopteesService: AdopteesService) { }


  ngOnInit() {
    this.adopteesService.adopteesSelected
      .subscribe(
        (adoptee: Adoptees) => {
          this.selectedAdoptee = adoptee;
        }
      )
  }

}
