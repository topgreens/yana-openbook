import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesComponent } from './activities.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesAddComponent } from './activities-add/activities-add.component';

const routes: Routes = [
  { path: '', component: ActivitiesComponent,
      children: [
      { path: 'list', component: ActivitiesListComponent },
      { path: 'add', component: ActivitiesAddComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
