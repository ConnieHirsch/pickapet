import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { Adoptees } from "../adoptees/adoptees.model";
import { AdopteesService } from "../adoptees/adoptees.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-carousel-basic",
  templateUrl: "./carousel-basic.component.html",
  styleUrls: ["./carousel-basic.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CarouselBasicComponent implements OnInit, OnDestroy {
  adoptees: Adoptees[];
  subscription: Subscription;

  images: Array<string>;
  captions: Array<string>;

  constructor(private adopteesService: AdopteesService) {}

  ngOnInit() {
    this.subscription = this.adopteesService.adopteesChanged.subscribe(
      (adoptees: Adoptees[]) => {
        this.adoptees = adoptees;
      }
    );
    this.adoptees = this.adopteesService.getAdoptees();

    this.images = this.adopteesService.getImages();

    this.captions = this.getCaptions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // getImages() {
  //   let iPaths = new Array();
  //   let i: number;
  //   for (let i in this.adoptees) {
  //     let iPath = <string>this.adoptees[i].imagePath;
  //     iPaths.push(iPath);
  //   }
  //   let final = <Array<string>>iPaths;
  //   console.log("iPaths: " + final);
  //   return final;
  // }

  getCaptions() {
    var iCaptions = new Array();
    let i: number;
    for (let i in this.adoptees) {
      let iPath = this.adoptees[i].name;
      iCaptions.push(iPath);
    }
    return iCaptions;
  }
}
