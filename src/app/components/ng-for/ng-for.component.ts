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
      {studId:132, name:'Aditya',state:'MH',isPresent:false , grade: 'A'},
      {studId:133, name:'Ram',state:'MP',isPresent:true, grade: 'A'},
      {studId:134, name:'Shyam',state:'GOA',isPresent:false, grade: 'B'},
      {studId:135, name:'Sahil',state:'GUJRAT',isPresent:true, grade: 'A'},
      {studId:136, name:'Sagar',state:'MH',isPresent:false, grade: 'C'}
    ]

    getPresentClassName(isPresent: boolean) {
      if(isPresent) {
        return 'bg-primary'
      } else {
        return 'bg-success'
      }
    }

    
  }
