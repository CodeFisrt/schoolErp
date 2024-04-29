import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "https://freeapi.gerasim.in/api/EventBooking/";

  obj: {
    key:'asdas'
  };
  
  nameChange$:Subject< string>;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${this.apiUrl}GetAllUsers`)
  }

  createNewUser (obj: any)  {
    return this.http.post(`${this.apiUrl}createuser`,obj);
  }

  getSumOf2No(num1: number, num2: number) {
    return num1+ num2;
  }
  getSumOf3No(num1: number, num2: number,num3: number) {
    return num1+ num2 + num3;
  }

  getSum(...args: any) {
    debugger;
    let sum = 0;
    for (let index = 0; index < args.length; index++) {
      sum = sum + args[index]; 
    }
    let total = 0
    const sum2 = args.reduce(function (acc: any, obj: any) { return acc + obj; }, 0);
    const sum3 = args.map((item:number)=>  {
      debugger;
      total=  total+ item;
    })
    const noList = [1,2,3,4,5,6];

    const newList = [2,3,4,5,6,7];

    const sum4 = noList.map((num:number) => num + 1)

    debugger;
    return sum;
  }

}
