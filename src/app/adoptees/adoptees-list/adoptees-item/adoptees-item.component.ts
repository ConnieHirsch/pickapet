import { Component, OnInit, Input } from '@angular/core';
import { Adoptees } from '../../adoptees.model';

@Component({
  selector: 'app-adoptees-item',
  templateUrl: './adoptees-item.component.html',
  styleUrls: ['./adoptees-item.component.css']
})
export class AdopteesItemComponent implements OnInit {
  @Input() adoptee: Adoptees;

  constructor() { }

  ngOnInit() {
  }

}
