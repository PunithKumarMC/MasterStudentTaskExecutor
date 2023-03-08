import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  constructor(){
// Define the user roles
enum UserRole {
  Master = 'master',
  Student = 'student',
}
  

// Define the user object shape
interface User {
  id: number;
  name: string;
  role: UserRole;
}


// Define a middleware function to check the user's role
function checkUserRole(role: UserRole) {
  return (req: any, res: any, next: any) => {
    const user: User = req.user;
    if (user && user.role === role) {
      next();
    } else {
      res.status(403).send(`Access denied. You must be a ${role} to access this page.`);
    }
  };
}
  }

// Example usage:


}
