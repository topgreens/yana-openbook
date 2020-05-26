import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { EditComponent } from './edit/edit.component';
import { EditPassComponent } from './edit-pass/edit-pass.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { UploadComponent } from './upload/upload.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    ProfileComponent, 
    EditComponent, 
    EditPassComponent, 
    RecentActivityComponent, 
    UploadComponent, 
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
