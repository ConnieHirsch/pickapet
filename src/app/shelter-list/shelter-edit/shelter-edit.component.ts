import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Shelter } from 'src/app/shared/shelter.model';
import { ShelterListService } from '../shelter-list.service';

@Component({
  selector: 'app-shelter-edit',
  templateUrl: './shelter-edit.component.html',
  styleUrls: ['./shelter-edit.component.css']
})
export class ShelterEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputReference: ElementRef;
  // @ViewChild('streetInput') streetInputReference: ElementRef;
  // @ViewChild('cityInput') cityInputReference: ElementRef;
  // @ViewChild('stateInput') stateInputReference: ElementRef;
  // @ViewChild('zipInput') zipInputReference: ElementRef;
  // @ViewChild('phoneInput') phoneInputReference: ElementRef;
  // @ViewChild('emailInput') emailInputReference: ElementRef;


  constructor(private shelterListService: ShelterListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value
    const newShelter = new Shelter(value.name, value.street, value.city, value.state, value.zip, value.email, value.phone);
    this.shelterListService.addShelter(newShelter);
    //console.log("adding form.value: " + value);
    // const shName = this.nameInputReference.nativeElement.value;
    // //const shName = this.nameInputReference.nativeElement.value;
    // const shStreet = this.streetInputReference.nativeElement.value;
    // const shCity = this.cityInputReference.nativeElement.value;
    // const shState = this.stateInputReference.nativeElement.value;
    // const shZip = this.zipInputReference.nativeElement.value;
    // const shPhone = this.phoneInputReference.nativeElement.value;
    // const shEmail = this.emailInputReference.nativeElement.value;
    //const newShelter = new Shelter(shName, shStreet, shCity, shState, shZip, shEmail, shPhone);
  }

}


