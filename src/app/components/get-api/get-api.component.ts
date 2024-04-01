import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent implements OnInit {


  userList: any [] = [];
  userObj: any = {
    "userId": 0,
    "name": "",
    "email": "",
    "password": "",
    "contactNo": "",
    "role": ""
  };
  questionList: any[]=[];

  isLoader: boolean = true;
  isSaveApiCallInProgress: boolean = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
     this.getAllUser();
  }

  getAllUser() {
    this.http.get("https://freeapi.gerasim.in/api/EventBooking/GetAllUsers").subscribe((res:any)=>{
      this.userList = res.data;
      this.isLoader = false
    })
  }
  onSaveUser() {
    debugger;
    if(this.isSaveApiCallInProgress == false) {
      this.isSaveApiCallInProgress =  true;
      this.http.post("https://freeapi.gerasim.in/api/EventBooking/createuser",this.userObj).subscribe((res:any)=>{
        if(res.result) {
          alert("User Created Success");
          this.getAllUser();
        } else {
          alert(res.message)
        }
        this.isSaveApiCallInProgress = false;
      })
    } 
  }

  onDelete(id: number) {

    const isDelete = confirm("Are you sure want to delete");
    debugger;
    if(isDelete == true) {
      this.http.get("https://freeapi.gerasim.in/api/EventBooking/DeleteUserById?id="+ id).subscribe((res:any)=>{
        if(res.result) {
          alert("User Delet Success");
          this.getAllUser();
        } else {
          alert(res.message)
        } 
      })
    }

   
  }

  // getAllUsers() {
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.userList =  res;
  //   })
  // }
  // getAllQuestions() {
  //   this.http.get("https://freeapi.gerasim.in/api/Interview/GetAllQuestions").toPromise().then(
  //     res => { // Success
  //       debugger;
        
  //     }
  //   )
  // }
  // getAllUser2() {
  //   fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(res=>{
  //     debugger;
  //   })
  // }

}
