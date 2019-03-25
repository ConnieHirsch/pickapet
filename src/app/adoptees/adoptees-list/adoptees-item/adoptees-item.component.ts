import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Adoptees } from '../../adoptees.model';

@Component({
  selector: 'app-adoptees-item',
  templateUrl: './adoptees-item.component.html',
  styleUrls: ['./adoptees-item.component.css']
})
export class AdopteesItemComponent implements OnInit {
  @Input() adoptee: Adoptees;
  @Output() itemSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onItemSelected() {
    console.log('onItemSelected');
    this.itemSelected.emit();
  }
}
