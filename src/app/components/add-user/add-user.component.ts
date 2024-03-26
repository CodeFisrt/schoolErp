import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  standalone: true,
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  //string number boolean date object array null undefiend 
  //var firstName = "Chetan";
  //firstNHame = "asdasd";
  //1st way => Direct Initialization
  firstName = "Chetan";

  //2nd ways declaration + initiazation
  courseName: string = "Angular";


  //3rd ways declaration
  courseDuration: string; 

  constructor() {
    console.log(" AddUserComponent Constructor")
    this.courseDuration = "2 months";
  }

  printName() {
    console.log(this.courseDuration);
  }


}
