import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdopteesComponent } from './adoptees/adoptees.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { AdopteesStartComponent } from './adoptees/adoptees-start/adoptees-start.component';
import { AdopteesDetailComponent } from './adoptees/adoptees-detail/adoptees-detail.component';
import { AdopteesEditComponent } from './adoptees/adoptees-edit/adoptees-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/adoptees', pathMatch: 'full' },
  {
    path: 'adoptees', component: AdopteesComponent, children: [
      { path: '', component: AdopteesStartComponent },
      { path: 'new', component: AdopteesEditComponent },
      { path: ':id', component: AdopteesDetailComponent },
      { path: ':id/edit', component: AdopteesEditComponent }
    ]
  },
  { path: 'shelters', component: ShelterListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
