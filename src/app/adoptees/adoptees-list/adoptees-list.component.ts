import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Adoptees } from '../adoptees.model';
import { AdopteesService } from '../adoptees.service';

@Component({
  selector: 'app-adoptees-list',
  templateUrl: './adoptees-list.component.html',
  styleUrls: ['./adoptees-list.component.css']
})
export class AdopteesListComponent implements OnInit {
  adoptees: Adoptees[];

  constructor(private adopteesService: AdopteesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.adopteesService.adopteesChanged
      .subscribe(
        (adoptees: Adoptees[]) => {
          this.adoptees = adoptees;
        }
      );
    this.adoptees = this.adopteesService.getAdoptees();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
