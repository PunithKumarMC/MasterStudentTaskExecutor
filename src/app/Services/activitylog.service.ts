import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { activity } from '../Model/activity';
import { Register } from '../Model/Register';

@Injectable({
  providedIn: 'root'
})
export class ActivitylogService {

  constructor(private http: HttpClient, private router: Router) { }
  baseUrl = 'http://localhost:8080/api/v1';
  public addlog(log : activity){
    
    const contentType = {'content-Type':'application/json'};
    console.log("within send log"+sessionStorage.getItem("email"));
    console.log("addlog")
    let api=`${this.baseUrl}/savelog`;
    const jsonfile= JSON.stringify(log);
    return this.http.post<activity>(
      api,
      jsonfile,{'headers':contentType}
    );
  }

  public getlog(){
    console.log("get")
    let api=`${this.baseUrl}/getlog`
    return this.http.get<activity>(
      api
    );
  }
}
