import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { concatMap, debounceTime, distinctUntilChanged, forkJoin, mergeMap, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  mode: string = ''; 
  results: any []= [];

  searchBox: FormControl = new FormControl("");


  constructor(private userService: UserService) {  

    this.searchBox.valueChanges.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      mergeMap(query=> this.userService.getSerachQuestion(query))
    ).subscribe((res: any)=>{
      console.log(res.data.length)
    })
    //  this.searchBox.valueChanges.subscribe((res: any)=>{
    //   debugger;
    //   this.userService.getSerachQuestion(res).subscribe((result:any)=>{
    //      debugger;
    //     console.log(result.data.length)
    //   })
    //  })

  }

  ngOnInit(): void {
    const allUser =  this.userService.getAllUsers();
    const droddownUser = this.userService.getAllUsersDropDownList();

    forkJoin([allUser,droddownUser]).subscribe((res:any)=>{
      debugger;
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
