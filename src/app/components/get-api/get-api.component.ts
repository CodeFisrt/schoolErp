import { HttpClient } from '@angular/common/http';
import { Component, OnInit , OnDestroy, ViewEncapsulation} from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GetAPIComponent implements OnInit,OnDestroy {


  message: string = 'This iS egt API'
  fullName= "asdasd";
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

  user$ : Observable<any> ;

  mySub: Subscription [] = []

  constructor(private http: HttpClient,private userService: UserService) {
    this.user$ = this.http.get<any>("https://freeapi.gerasim.in/api/EventBooking/GetAllUsers").pipe(
      map(item=>{
        debugger;
        return item.data;
      })
    );
  }

  ngOnInit(): void {

    const citsyList = ['Pune','Mumabi','nagput'];
    debugger;
    const sum =  this.userService.getSum(1,2,3,5);
  }

  getAllUser(): void {
    this.mySub.push(this.userService.getAllUsers().subscribe((res:any)=>{
      this.userList = res.data;
       this.isLoader = false
  }))
    
    // this.http.get("https://freeapi.gerasim.in/api/EventBooking/GetAllUsers").subscribe((res:any)=>{
    //   this.userList = res.data;
    //   this.isLoader = false
    // })
  }
  onSaveUser() {
    debugger;
    if(this.isSaveApiCallInProgress == false) {
      this.isSaveApiCallInProgress =  true;
   const result=   this.userService.createNewUser(this.userObj).subscribe((res:any)=>{
        if(res.result) {
          alert("User Created Success");
          this.getAllUser();
        } else {
          alert(res.message)
        }
        this.isSaveApiCallInProgress = false;
      })
      this.mySub.push(result)
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

  // onEdit(user: any) { 
  //   const newStrObj =  JSON.stringify(user);

  //   this.userObj = JSON.parse(newStrObj);
  // }


  onEdit(userId:any) {
    debugger;
    this.http.get("https://freeapi.gerasim.in/api/EventBooking/GetUserById?id="+ userId).subscribe((res:any)=>{
      this.userObj = res.data;
    })
  }
  getDate(message: string) {
    debugger;
  }
  onUpdate() {
    if(this.isSaveApiCallInProgress == false) {
      this.isSaveApiCallInProgress =  true;
      this.http.post("https://freeapi.gerasim.in/api/EventBooking/UpdateUser", this.userObj).subscribe((res:any)=>{
        if(res.result) {
          alert("User Updated Success");
          this.getAllUser();
        } else {
          alert(res.message)
        }
        this.isSaveApiCallInProgress = false;
      })
    } 
  }

  ngOnDestroy(): void {
    this.mySub.forEach((sub)=>{
      sub.unsubscribe();
    })
  }
   

}
