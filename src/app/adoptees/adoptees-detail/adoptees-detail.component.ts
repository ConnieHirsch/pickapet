import { Component, OnInit, Input } from '@angular/core';
import { Adoptees } from '../adoptees.model';

@Component({
  selector: 'app-adoptees-detail',
  templateUrl: './adoptees-detail.component.html',
  styleUrls: ['./adoptees-detail.component.css']
})
export class AdopteesDetailComponent implements OnInit {
  @Input() adoptee: Adoptees;
  constructor() { }

  ngOnInit() {
  }

}
