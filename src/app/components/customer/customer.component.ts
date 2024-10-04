import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent { 


  userListForm =  new FormGroup({
    list: this.fb.array([])
  })
  
  employeeForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl(""),
    password: new FormControl(""),
    contactNo: new FormControl(""),
    projectList: this.fb.array([])
  })

  constructor(private fb: FormBuilder){

  }

  get getFormArray() {
    const formArray = this.employeeForm.get("projectList") as FormArray;
    return formArray;
  }

  addNewproject() {
    debugger;
    const projectrForm = this.fb.group({
      projectName: new FormControl("",[Validators.required]),
      technology: new FormControl()
    });
    const formArray =this.employeeForm.get("projectList") as FormArray;
    formArray.push(projectrForm)
  }

  removeProject(index:number) {
    this.getFormArray.removeAt(index)
  }

  saveEmp() {
    const formValue =  this.employeeForm.value;
    debugger;
  }
}
