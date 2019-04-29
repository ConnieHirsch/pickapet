import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Adoptees } from '../adoptees/adoptees.model';
import { AdopteesService } from '../adoptees/adoptees.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  adoptees: Adoptees[];
  subscription: Subscription;

  constructor(private adopteesService: AdopteesService) { }

  ngOnInit() {
    this.subscription = this.adopteesService.adopteesChanged
      .subscribe(
        (adoptees: Adoptees[]) => {
          this.adoptees = adoptees;
        }
      );
    this.adoptees = this.adopteesService.getAdoptees();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
