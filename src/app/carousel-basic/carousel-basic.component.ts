import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";

import { Adoptees } from "../adoptees/adoptees.model";
import { AdopteesService } from "../adoptees/adoptees.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-carousel-basic",
  templateUrl: "./carousel-basic.component.html",
  styleUrls: ["./carousel-basic.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CarouselBasicComponent implements OnInit, OnDestroy {
  adoptees: Adoptees[];
  subscription: Subscription;
  showNavigationIndicators = false;

  images: Array<string>;
  captions: Array<string>;

  constructor(
    private adopteesService: AdopteesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.adopteesService.adopteesChanged.subscribe(
      (adoptees: Adoptees[]) => {
        this.adoptees = adoptees;
      }
    );
    this.adoptees = this.adopteesService.getAdoptees();

    this.images = this.adopteesService.getImages();

    //this.captions = this.getCaptions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPickAdoptee(i) {
    //alert("You picked # " + i);
    this.router.navigate(["../adoptees/" + i], { relativeTo: this.route });
  }
}
