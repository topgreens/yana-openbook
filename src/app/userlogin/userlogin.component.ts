import { Component, OnInit } from '@angular/core';
import { User } from './model.user';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user: User;
  username;
  usericon;
  userlogin: boolean;
  usemail;
  uspass;
  isLoading = false;
  
  constructor(private router: Router, public userService: LoginService) { }

  
  ngOnInit(): void {
    this.usemail = 'proyectoyana@gmail.com';
    this.uspass = '';
    this.login();
    this.isLoading = true;
  }
  

  login(){
    console.log('enviamos: ' + this.usemail + ' ' + this.uspass);
    this.userService.getUserLogin(this.usemail, this.uspass)
    .subscribe(
      (data: User) => {
        this.username = data.usfullname;
        this.user=data;
        this.usericon = '/assets/images/' + data.usavatar;
        this.userlogin = true;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
      },
      (error) => {
    });
  }

  unLogin(){
    this.userlogin = false;
  }

}