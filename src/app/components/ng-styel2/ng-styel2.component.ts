import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-styel2',
  templateUrl: './ng-styel2.component.html',
  styleUrl: './ng-styel2.component.css'
})
export class NgStyel2Component {

   textColor: string = 'red';
   fontSize: string = '30px';
   backColor: string ='teal';
   firstName= 'Chetan';
   lastName ="Jogi";

   fullName =  this.firstName +  ' '+ this.lastName;

   customeCss: any = {
    'color':'red',
    'font-size': '30px',
    'background-color':'blue'
   }

   showMobileDiv: boolean= false;
   showLaptopnDiv: boolean = false;
   showCameraDiv: boolean = false;

   showMobile() {
    this.showMobileDiv = true;
    this.showLaptopnDiv = false;
    this.showCameraDiv =  false;
   }
   showlaptop() {
    this.showLaptopnDiv = true;
    this.showMobileDiv = false;
    this.showCameraDiv = false;
   }
   showcamera() {
    this.showCameraDiv =  true;

    this.showLaptopnDiv = false;
    this.showMobileDiv = false;
   }
}
