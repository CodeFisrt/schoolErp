import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
 firstName: string = "Shyam";
 currentDate: Date;
 courseName = "Angular";
 inputType: string = "radio"; 
 selectedState: string = '';

 constructor() {
  this.currentDate = new Date();
 }

 changeFirstNAme() {
   this.firstName = "Rahul";
 }

 showAlert() {
  alert("Button Clciked");
 }

 showMessage(message: string) {
  alert(message)
 }


 
}
