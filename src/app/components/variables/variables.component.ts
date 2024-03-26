import { Component } from '@angular/core';

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

  constructor() {
    debugger;
    console.log(this.firstName)
    this.firstName  = "Shyam";
    console.log(this.firstName)
    this.productPrice = 123.23423; 
    this.student = 123;
    this.student = false; 
  } 

}
 