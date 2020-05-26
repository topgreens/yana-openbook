import { ActivitiesService } from './../activities.service';
import { Component, OnInit } from '@angular/core';
import { Activity } from './../activity.model';
import { User } from 'src/app/userlogin/model.user';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  activities: Activity[];
  user: User;

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.list();
  }

  ///////////////////////////////////////////////////
  ////// AQUI LOS MÉTODOS DEL COMPONENTE LIST
  list(){
    this.activitiesService.getUserActivities(this.user.usid)
    .subscribe((data: Activity[]) =>
    {
      this.activities = data;
    });
  }

  remove(id){
    this.activitiesService.delUserActivity(id).subscribe(() => {
      this.list();
    });
  }

}
