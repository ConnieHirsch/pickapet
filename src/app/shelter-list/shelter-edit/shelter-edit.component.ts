import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Shelter } from 'src/app/shared/shelter.model';
import { ShelterListService } from '../shelter-list.service';

@Component({
  selector: 'app-shelter-edit',
  templateUrl: './shelter-edit.component.html',
  styleUrls: ['./shelter-edit.component.css']
})
export class ShelterEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shelterForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Shelter;

  constructor(private shelterListService: ShelterListService) { }

  ngOnInit() {
    this.subscription = this.shelterListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shelterListService.getShelter(index);
          this.shelterForm.setValue({
            name: this.editedItem.name,
            street: this.editedItem.street,
            city: this.editedItem.city,
            state: this.editedItem.state,
            phone: this.editedItem.phone,
            zip: this.editedItem.zip,
            email: this.editedItem.email
          })
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value
    const newShelter = new Shelter(value.name, value.street, value.city, value.state, value.zip, value.email, value.phone);
    if (this.editMode) {
      this.shelterListService.updateShelter(this.editedItemIndex, newShelter);
    } else {
      this.shelterListService.addShelter(newShelter);
    }
    this.editMode = false;
    form.reset();
  }

  onReset() {
    this.shelterForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shelterListService.deleteShelter(this.editedItemIndex);
    this.onReset();
  }

}


