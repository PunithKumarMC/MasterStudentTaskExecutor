import { Component } from '@angular/core';
import { activity } from '../Model/activity';
import { ActivitylogService } from '../Services/activitylog.service';
import { RegisterServiceService } from '../Services/register-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
constructor (private log:ActivitylogService,private service:RegisterServiceService){}

logs :activity=new activity();
data!:any

public getlogs(){
  console.log("get logs")
  this.log.getlog().subscribe((d)=>{
   this.data = d ;
  });
}

public logout(){
  this.service.logout();
}
}
