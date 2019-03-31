import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-adoptees-edit',
  templateUrl: './adoptees-edit.component.html',
  styleUrls: ['./adoptees-edit.component.css']
})
export class AdopteesEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log("Edit Mode is " + this.editMode);
        }
      );
  }

}
