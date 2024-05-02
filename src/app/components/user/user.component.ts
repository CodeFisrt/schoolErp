import { Component } from '@angular/core';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  mode: string = '';
  constructor(private userService: UserService) {
    console.log(" UserComponent Constructor")
    const mode =   userService.data.mode;
    
    this.getAllUsers(); 
    this.getAllUsersDropDownList();
    this.userService.userListRespos$.subscribe((res:any)=>{
     
    })
    this.userService.modeChange$.subscribe((res:string)=>{
      debugger;
      this.mode = res;
    })
    this.userService.modeChangeBehaviour$.subscribe((res:string)=>{
      debugger;
      this.mode = res;
    })
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res:any)=>{
      
    })
  }

  getAllUsersDropDownList() {
    this.userService.getAllUsersDropDownList().subscribe((res:any)=>{
     
    })
  }
 
}
