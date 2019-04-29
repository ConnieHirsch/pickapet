import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Adoptees } from '../adoptees.model';
import { AdopteesService } from '../adoptees.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-adoptees-list',
  templateUrl: './adoptees-list.component.html',
  styleUrls: ['./adoptees-list.component.css']
})
export class AdopteesListComponent implements OnInit, OnDestroy {
  adoptees: Adoptees[];
  subscription: Subscription;

  constructor(private adopteesService: AdopteesService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

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

  onNewAdoptee() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
