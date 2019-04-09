import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdopteesComponent } from './adoptees/adoptees.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { AdopteesStartComponent } from './adoptees/adoptees-start/adoptees-start.component';
import { AdopteesDetailComponent } from './adoptees/adoptees-detail/adoptees-detail.component';
import { AdopteesEditComponent } from './adoptees/adoptees-edit/adoptees-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/adoptees', pathMatch: 'full' },
  {
    path: 'adoptees', component: AdopteesComponent, children: [
      { path: '', component: AdopteesStartComponent },
      { path: 'new', component: AdopteesEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: AdopteesDetailComponent },
      { path: ':id/edit', component: AdopteesEditComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'shelters', component: ShelterListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
