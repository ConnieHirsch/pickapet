import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Adoptees } from '../../adoptees.model';
import { AdopteesService } from '../../adoptees.service';

@Component({
  selector: 'app-adoptees-item',
  templateUrl: './adoptees-item.component.html',
  styleUrls: ['./adoptees-item.component.css']
})
export class AdopteesItemComponent implements OnInit {
  @Input() adoptee: Adoptees;
  //@Output() itemSelected = new EventEmitter<void>();

  // constructor(private adopteesService: AdopteesService) { }

  ngOnInit() {
  }

  // onItemSelected() {
  //   console.log('onItemSelected');
  //   this.adopteesService.adopteesSelected.emit(this.adoptee);
  //   //this.itemSelected.emit();

}

