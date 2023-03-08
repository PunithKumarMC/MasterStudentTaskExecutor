import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../Model/login';
import { Register } from '../Model/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient, private router: Router) {}
  baseUrl = 'http://localhost:8085/api/v1';
  public doRegistration(user: Register) {
    let api=`${this.baseUrl}/register`
    return this.http.post<Register>(
      api,
      user
    );
  }
  public doLogin(Loginuser: login) {
    sessionStorage.setItem("email",Loginuser.email);
    console.log("dologin" +Loginuser.role)
    let api=`${this.baseUrl}/loginAuthenticateUser`
    return this.http.post<login>(
      api,
      Loginuser
    );
  }


  register() {
    this.router.navigateByUrl('/login');
  }


    // to log out user
    logout()
    {
      localStorage.clear();
      localStorage.removeItem('email');
      localStorage.removeItem('user');
      this.router.navigateByUrl("/home");
      sessionStorage.setItem('userLoggedIn', 'false');
      return  true;
    } 
  
}
