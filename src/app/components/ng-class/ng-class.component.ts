import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  div1ClassName: string = '';
  div2ClassName: string = 'bg-secondary';
  student1Name: string = '';
  student2Name: string = '';

  isSidePanelVisible: boolean = false;
  isDivRed: boolean = true;

  addPrimary() {
    this.div1ClassName = 'bg-primary'
  }
  addDanger() {
    this.div1ClassName = 'bg-danger'
  }
  toggleDIv4Class() {
    this.isDivRed = !this.isDivRed;
  }
  getClassName() {
    return 'bg-warning';
  }
}
