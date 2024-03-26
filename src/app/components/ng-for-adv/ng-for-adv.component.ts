import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ng-for-adv',
  template: '<div> <h1> Welcome </h1></div>',
  styles: ['.text-primary{color:red,font-size:12px}','.']
})
export class NgForAdvComponent {
  studentList: any [] = [
    {studId:132, name:'Aditya',state:'MH',isPresent:false},
    {studId:133, name:'Ram',state:'MP',isPresent:true},
    {studId:134, name:'Shyam',state:'GOA',isPresent:false},
    {studId:135, name:'Sahil',state:'GUJRAT',isPresent:true},
    {studId:136, name:'Sagar',state:'MH',isPresent:false}
  ];
  uniqueKey:string ='studId';
 
  myCityList: string [] = [];
 

  // cityList$: Observable<string[]> = of(['Pune','Nagpur','Mumbai']);

  user$: Observable<any[]> | undefined;
  
  constructor(private http: HttpClient) {
    // this.cityList$.subscribe(res=>{
    //   this.myCityList = res;
    // })
    this.getUser();
  }

  identify(index: number, item:any){
    return item.studId; 
 }
  getUser() {
   this.user$ = this.http.get<any[]>("https://jsonplaceholder.typicode.com/users") 
  }

  checkStudPresence(isActive: boolean) {
    if(isActive) {
      return 'student is Present'
    } else {
      return 'student is absent'
    }
  }


}
