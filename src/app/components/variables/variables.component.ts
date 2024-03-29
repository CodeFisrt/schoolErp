import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {

  firstName = "Ram";
  lastName = "L"; 
  rollNo = '12233';

  productPrice : number = 12.45;
  studentRollNo = 123; 

  isActive:  boolean = true;
  isStudentPresent = false;

  currentDate: Date = new Date();

  student : any = "Rupesh";

  constructor(private router: Router) {
    debugger;
    console.log(this.firstName)
    this.firstName  = "Shyam";
    console.log(this.firstName)
    this.productPrice = 123.23423; 
    this.student = 123;
    this.student = false; 
  } 

  naviagteToAddUser(id: number) {
    this.router.navigate(['addUser',id])
  }

}
 