import { Activity } from './activity.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  activity: Activity;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('pepe:1234')
    })
  };

  getUserActivities(usid) {
    return this.http.get<Activity[]>('/api/activity/' + usid + '/list', this.httpOptions);
  }
  getUserActivity(acid) {
    return this.http.get<Activity>('/api/activity/' + acid + '/get', this.httpOptions);
  }
  addUserActivity(activity: Activity){
    return this.http.post('/api/activity/create', activity);
  }
  delUserActivity(id){
    return this.http.delete('/api/activity/delete?id=' + id);
  }


}
