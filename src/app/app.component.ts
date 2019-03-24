import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pet Adoption Site';
  loadedFeature = 'adoptee';

  onNavigate(feature: string) {
    console.log('Feature string: ' + feature);
    this.loadedFeature = feature;
  }
}
