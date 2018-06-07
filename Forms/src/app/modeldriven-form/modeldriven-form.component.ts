import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldriven-form',
  templateUrl: './modeldriven-form.component.html',
  styleUrls: ['./modeldriven-form.component.css']
})
export class ModeldrivenFormComponent implements OnInit {
  
  userForm:FormGroup;
  name:FormControl;
  age:FormControl;
  constructor() {
  /*this.userForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    age: new FormControl('',Validators.required)
  });*/
  }
 
  ngOnInit() {
    this.name = new FormControl('',[Validators.required]);
    this.age = new FormControl('',[Validators.required]);
    
    this.userForm= new FormGroup({
    'name':this.name,
    'age':this.age
    }); 

    
  
  }

  saveData() {
    console.log(this.userForm.value);
  }
  Clear() {
    this.userForm.reset();
  }

}
