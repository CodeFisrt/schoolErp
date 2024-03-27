import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for2',
  templateUrl: './ng-for2.component.html',
  styleUrl: './ng-for2.component.css'
})
export class NgFor2Component {

  stateName: string = 'MAH';
  stateList: string [] = ['Maharashtra','Punjab','Goa','Delhi']

  isTableVisiable: boolean = false;

  studentList: any [] = [
    {studId:132, name:'Aditya',state:'MH',isPresent:false},
    {studId:133, name:'Ram',state:'MP',isPresent:true},
    {studId:134, name:'Shyam',state:'GOA',isPresent:false},
    {studId:135, name:'Sahil',state:'GUJRAT',isPresent:true},
    {studId:136, name:'Sagar',state:'MH',isPresent:false}
  ]
  addState() {
    this.stateList.push(this.stateName)
  }
  showTable() {
    this.isTableVisiable = true;
  }
  hideTable() {
    this.isTableVisiable = false;
  }
}
