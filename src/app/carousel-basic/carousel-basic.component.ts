import { Component, OnInit, OnDestroy } from "@angular/core";
import { Adoptees } from "../adoptees/adoptees.model";
import { AdopteesService } from "../adoptees/adoptees.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-carousel-basic",
  templateUrl: "./carousel-basic.component.html",
  styleUrls: ["./carousel-basic.component.css"]
})
export class CarouselBasicComponent implements OnInit, OnDestroy {
  adoptees: Adoptees[];
  subscription: Subscription;
  //arrImages: Array<string> = this.adopteesService.getImages();

  images: Array<string>;
  // images = [
  //   "http://place-puppy.com/400x220",
  //   "http://place-puppy.com/400x400",
  //   "http://placekitten.com/200/300",
  //   "http://placekitten.com/300/300"
  // ];
  //images = [1, 2, 3].map(() => this.getImages());

  //images = <Array<string>>this.getImages();
  captions = this.getCaptions();
  // images = [1, 2, 3].map(
  //   () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  // );

  constructor(private adopteesService: AdopteesService) {}

  ngOnInit() {
    this.subscription = this.adopteesService.adopteesChanged.subscribe(
      (adoptees: Adoptees[]) => {
        this.adoptees = adoptees;
      }
    );
    this.adoptees = this.adopteesService.getAdoptees();

    this.images = this.adopteesService.getImages();
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
