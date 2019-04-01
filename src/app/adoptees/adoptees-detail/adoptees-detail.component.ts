import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.adoptee = this.adopteesService.getAdoptee(this.id);
        });
  }

  onEditAdoptee() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
}
