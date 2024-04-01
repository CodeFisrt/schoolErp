import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html', 
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
  userId: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(" AddUserComponent Constructor")
    this.courseDuration = "2 months";
    const rouetData = this.activatedRoute.data;
    this.activatedRoute.params.subscribe((paramObj:any)=> {
      debugger;
      this.userId = paramObj.id;
    })
  }

  printName() {
    console.log(this.courseDuration);
  }


}
