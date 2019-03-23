import { Component, OnInit } from "@angular/core";

import { Adoptees } from "../adoptees.model";

@Component({
  selector: "app-adoptees-list",
  templateUrl: "./adoptees-list.component.html",
  styleUrls: ["./adoptees-list.component.css"]
})
export class AdopteesListComponent implements OnInit {
  adoptees: Adoptees[] = [
    new Adoptees(
      "A Dogue",
      "This is a new dogue entry",
      "http://place-puppy.com/200x200",
      "Dog",
      "Mutt",
      2
    ),
    new Adoptees(
      "Kitty Deadpool",
      "This is a new kitten entry",
      "http://placekitten.com/200/300",
      "Cat",
      "House",
      1
    )
  ];

  constructor() {}

  ngOnInit() {}
}
