import { Component } from "@angular/core";

@Component({
  selector: "ngbd-carousel-basic",
  templateUrl: "./splash.component.html"
})
export class SplashComponent {
  images = [1, 2, 3].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );
}
