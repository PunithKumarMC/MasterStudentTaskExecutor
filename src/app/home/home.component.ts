import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { login } from '../Model/login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router : Router){}

  masterSigning(){
    this.router.navigateByUrl("/register");
    sessionStorage.setItem("user","master");
    console.log(sessionStorage.getItem("user"));
  }

  studentSigning(){
    this.router.navigateByUrl("/register");
    sessionStorage.setItem("user","student");
    console.log(sessionStorage.getItem("user"));
  }

}
