import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { AdopteesService } from '../adoptees.service';

@Component({
  selector: 'app-adoptees-edit',
  templateUrl: './adoptees-edit.component.html',
  styleUrls: ['./adoptees-edit.component.css']
})
export class AdopteesEditComponent implements OnInit {
  id: number;
  editMode = false;
  adopteeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private adopteesService: AdopteesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log("Edit Mode for adoptees is " + this.editMode);
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.adopteeForm);
  }

  private initForm() {
    let aName = '';
    let aImagePath = '';
    let aDescription = '';
    let aType = '';
    let aBreed = '';
    let aAge: number;

    if (this.editMode) {
      const adoptee = this.adopteesService.getAdoptee(this.id);
      aName = adoptee.name;
      aImagePath = adoptee.imagePath;
      aDescription = adoptee.description;
      aType = adoptee.type;
      aBreed = adoptee.breed;
      aAge = adoptee.age;
    }
    this.adopteeForm = new FormGroup({
      'name': new FormControl(aName),
      'imagePath': new FormControl(aImagePath),
      'description': new FormControl(aDescription),
      'type': new FormControl(aType),
      'breed': new FormControl(aBreed),
      'age': new FormControl(aAge)

    });
  }

}
