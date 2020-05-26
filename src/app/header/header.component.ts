import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../userlogin/login.service';
import { User } from '../userlogin/model.user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  
  isActive: boolean = true;
  links: Enlace[];
  @Input() enlaceActivo: string;

  constructor(private router: Router, public userService: LoginService) { }

  sidebarCollapse(){
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
  }

}

interface Enlace {
  texto: string;
  link: string;
}
