import { User } from './../../userlogin/model.user';
import { Activity } from './../activity.model';
import { ActivitiesService } from './../activities.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-activities-add',
  templateUrl: './activities-add.component.html',
  styleUrls: ['./activities-add.component.css']
})
export class ActivitiesAddComponent implements OnInit {

  activity = new Activity();

  constructor(private router: Router, private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem('currentUser'));
    this.activity.acusid=user.usid;
  }

  add() {
    this.activitiesService.addUserActivity(this.activity).subscribe(() => {
      this.router.navigate(['/activities/list']);
    });
  }

}
