import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

  textColor: string = 'red';
  textFontSize: string = '29px';

  isActive: boolean = false;

  divWitdh= 90;
  progress = 0;
  customCss: any = {
    color:'red',
    'font-size':'30px',
    'width': '200px',
    height: '200px',
    'background-color':'green'
  }


  getMyCss() {
    const circle = {
      width: '200px',
      height: '200px',
      'border-radius': '50%',
      'background-color': 'red'
    }
    return circle;
  }
  
}
