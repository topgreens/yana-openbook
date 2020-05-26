import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { EditComponent } from './edit/edit.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { EditPassComponent } from './edit-pass/edit-pass.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
  children: [
   
    { path: 'edit', component: EditComponent },
    { path: 'edit-pass', component: EditPassComponent },
    { path: 'recent-activity', component: RecentActivityComponent },
    { path: '', redirectTo: 'user-profile', pathMatch: 'full' }]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
