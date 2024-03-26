import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
    stateList: string[] = ['Maharashtra','Goa',
    'Punjab',"Madhya Prdesh"];

    studentList: any [] = [
      {studId:132, name:'Aditya',state:'MH',isPresent:false},
      {studId:133, name:'Ram',state:'MP',isPresent:true},
      {studId:134, name:'Shyam',state:'GOA',isPresent:false},
      {studId:135, name:'Sahil',state:'GUJRAT',isPresent:true},
      {studId:136, name:'Sagar',state:'MH',isPresent:false}
    ]

    
  }
