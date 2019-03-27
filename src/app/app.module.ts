import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AdopteesComponent } from './adoptees/adoptees.component';
import { AdopteesListComponent } from './adoptees/adoptees-list/adoptees-list.component';
import { AdopteesDetailComponent } from './adoptees/adoptees-detail/adoptees-detail.component';
import { AdopteesItemComponent } from './adoptees/adoptees-list/adoptees-item/adoptees-item.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { ShelterEditComponent } from './shelter-list/shelter-edit/shelter-edit.component';

@NgModule({
  declarations: [
    AdopteesComponent,
    AdopteesListComponent,
    AdopteesDetailComponent,
    AdopteesItemComponent,
    ShelterListComponent,
    ShelterEditComponent,
    AppComponent
  ],
  imports: [BrowserModule, UiModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
