import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomepageComponent } from './homepage/homepage.component';



const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'homepage', component: HomepageComponent},
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), data: {preload: true} },
  { path: 'activities', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule), data: {preload: true} },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
