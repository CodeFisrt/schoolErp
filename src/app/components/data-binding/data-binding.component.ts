import { Component, OnChanges,  
  OnInit,  
  DoCheck,  
  AfterContentInit,  
  AfterContentChecked,  
  AfterViewInit,  
  AfterViewChecked,  
  OnDestroy, 
  viewChild,
  ViewChild} from '@angular/core';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnChanges, OnInit,  DoCheck,  AfterContentInit,  AfterContentChecked,  AfterViewInit,  AfterViewChecked,  OnDestroy  {
 firstName: string = "Shyam";
 currentDate: Date;
 courseName = "Angular";
 inputType: string = "radio"; 
 selectedState: string = '';
 
 @ViewChild(AddUserComponent) child!: AddUserComponent;

 constructor() {
  this.currentDate = new Date();
 }
 ngOnChanges() {  
  console.log(`ngOnChanges - data is `);  
}  

ngOnInit() {  
  console.log(`ngOnInit  - data is `);  
  const firstName= this.child.firstName;
  debugger;
}  

ngDoCheck() {  
  console.log("ngDoCheck")  
}  

ngAfterContentInit() {  
  console.log("ngAfterContentInit");  
}  

ngAfterContentChecked() {  
  console.log("ngAfterContentChecked");  
}  

ngAfterViewInit() {  
  console.log("ngAfterViewInit");  
  const firstName= this.child.firstName;
  debugger;
}  

ngAfterViewChecked() {  
  console.log("ngAfterViewChecked");  
}  

ngOnDestroy() {  
  console.log("ngOnDestroy");  
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
