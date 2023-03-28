import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { activity } from '../Model/activity';
import { ActivitylogService } from '../Services/activitylog.service';
import { RegisterServiceService } from '../Services/register-service.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {

result: any;

constructor(private service:RegisterServiceService, private log:ActivitylogService){}
  num3!: number;
num4!:number;

symbols = ['+', '-', '/', '*'];
selectedSymbol!: string;

masterform = new FormGroup({
  num1 : new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]')
  ]),
  // symbol: new FormControl('', [
   
    
  // ]),
  num2: new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]')
  ]),
});


calculateResult(): number  {
  console.log(this.selectedSymbol + "calc")
  switch (this.selectedSymbol) {
    case '+':
      console.log(this.selectedSymbol + "calc" +this.num3)
      return this.num3 + this.num4;
    case '-':
      return this.num3 - this.num4;
    case '/':
      if (this.num4 !== 0) {
       return this.result = Math.floor(this.num3 / this.num4);
      } else {
       return this.result = 0;
      
    }
    case '*':
      return this.num3 * this.num4;
    default:
      return 0;
  }
}
actlog : activity = new activity();

public activitylog(){
  this.actlog.num1 = this.masterform.value.num1;
  this.actlog.num2 = this.masterform.value.num2;
  this.actlog.symbol = this.selectedSymbol;
  this.actlog.result = this.calculateResult();
  this.actlog.email = sessionStorage.getItem("email");
  this.log.addlog(this.actlog).subscribe((data:any)=>{
    console.log(data);
  })

}

public logout(){
  this.service.logout();
}

}

