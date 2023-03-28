import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../Model/login';
import { RegisterServiceService } from '../Services/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles = ['master','student'];
  selectedSymbol!:string;
  registerform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
  });

  ngOnInit(): void {
   
  }

  constructor(private service: RegisterServiceService,private router: Router ) {}
  login: login = new login();
  error: string = '';
  token: any;
  public onLogin() {
    // this.router.navigateByUrl('/sidenav/main', { skipLocationChange: true });
// this.router.navigate(["main"]);
    this.login.email = this.registerform.value.email!;
    this.login.password = this.registerform.value.password!;
    this.login.role = this.selectedSymbol;
    sessionStorage.setItem("user",this.selectedSymbol);
    console.log("onlogin")
    this.service.doLogin(this.login).subscribe(
      (result: any) => {
        console.log(result.role + "ddd")
          if(result.role=="master"){
            this.router.navigateByUrl("/master");
          }else{
            this.router.navigateByUrl("/student");
          }
          sessionStorage.setItem('userLoggedIn', 'true')
         
      }, //from backend we have sent two varoable named as token and message which is getting printed, if you don't provide the correct variable name it will give you undefined error
      (Error) => (this.error = 'Invalid Credentials')
    );
  }

}
