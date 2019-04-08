import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pet Adoption Site';
  loadedFeature = 'adoptee';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDq0291Tz5EWOg2iW90uGfXNble5LME4JI',
      authDomain: 'https://shelters-a58f2.firebaseio.com'

    })
  }

  onNavigate(feature: string) {
    console.log('Feature string: ' + feature);
    this.loadedFeature = feature;
  }
}
