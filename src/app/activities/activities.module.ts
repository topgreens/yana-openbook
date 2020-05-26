import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesEditComponent } from './activities-edit/activities-edit.component';
import { ActivitiesAddComponent } from './activities-add/activities-add.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';


@NgModule({
  declarations: [
    ActivitiesComponent, 
    ActivitiesEditComponent, 
    ActivitiesAddComponent, 
    ActivitiesListComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    FormsModule
  ]
})
export class ActivitiesModule { }
