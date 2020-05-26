import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), data: {preload: true} },
  { path: 'activities', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule), data: {preload: true} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
