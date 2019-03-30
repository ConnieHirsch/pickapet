import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdopteesComponent } from './adoptees/adoptees.component';
import { AdopteesListComponent } from './adoptees/adoptees-list/adoptees-list.component';
import { AdopteesDetailComponent } from './adoptees/adoptees-detail/adoptees-detail.component';
import { AdopteesItemComponent } from './adoptees/adoptees-list/adoptees-item/adoptees-item.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { ShelterEditComponent } from './shelter-list/shelter-edit/shelter-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShelterListService } from './shelter-list/shelter-list.service'
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AdopteesStartComponent } from './adoptees/adoptees-start/adoptees-start.component';

@NgModule({
  declarations: [
    AdopteesComponent,
    AdopteesListComponent,
    AdopteesDetailComponent,
    AdopteesItemComponent,
    ShelterListComponent,
    ShelterEditComponent,
    HeaderComponent,
    AppComponent,
    DropdownDirective,
    AdopteesStartComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ShelterListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
