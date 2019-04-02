import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AdopteesService } from '../adoptees.service';
import { Adoptees } from '../adoptees.model';

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
    private router: Router,
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
    console.log("Saving: " + this.adopteeForm.value['imagePath']);
    const newAdoptee = new Adoptees(
      this.adopteeForm.value['name'],
      this.adopteeForm.value['imagePath'],
      this.adopteeForm.value['description'],
      this.adopteeForm.value['type'],
      this.adopteeForm.value['breed'],
      this.adopteeForm.value['age']);
    if (this.editMode) {
      this.adopteesService.updateAdoptee(this.id, newAdoptee)
    } else {
      this.adopteesService.addAdoptee(newAdoptee);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
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
      'name': new FormControl(aName, Validators.required),
      'imagePath': new FormControl(aImagePath, Validators.required),
      'description': new FormControl(aDescription, Validators.required),
      'type': new FormControl(aType, Validators.required),
      'breed': new FormControl(aBreed, Validators.required),
      'age': new FormControl(aAge)

    });
  }

}
