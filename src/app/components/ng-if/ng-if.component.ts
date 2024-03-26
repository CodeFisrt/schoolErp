import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  isDivVisible: boolean = true;
  isDiv2Visible : boolean = false;
  isDiv4Visisble: boolean = false;

  isDiv5Visible: boolean = false;

  city1Name: string = "Pune";
  city2Name = "Pune";

  getDiv4Value() {
    console.log("Div 4444")
    return false;
  }

  hideDiv1() {
    this.isDivVisible = false;
  }

  showDiv1() {
    this.isDivVisible = true;
  }
  toggleDiv2() {
    // if(this.isDiv2Visible == true) {
    //   this.isDiv2Visible = false;
    // } else {
    //   this.isDiv2Visible = true;
    // }
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
