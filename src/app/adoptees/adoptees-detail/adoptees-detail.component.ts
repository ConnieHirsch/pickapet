import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Adoptees } from '../adoptees.model';
import { AdopteesService } from '../adoptees.service';

@Component({
  selector: 'app-adoptees-detail',
  templateUrl: './adoptees-detail.component.html',
  styleUrls: ['./adoptees-detail.component.css']
})
export class AdopteesDetailComponent implements OnInit {
  adoptee: Adoptees;
  id: number;

  constructor(private adopteesService: AdopteesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.adoptee = this.adopteesService.getAdoptee(this.id);
        });
  }

}
