import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/User.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-UserForm',
    templateUrl: './UserForm.component.html',
    styleUrls: ['./UserForm.component.scss']
})
export class UserForm implements OnInit {



    public userForm: FormGroup;
  
    constructor(public router : Router, public formBuilder: FormBuilder, private userService: UserService) {
      this.userForm = this.formBuilder.group({
        name: [''],
        surname: [''],
        quizs: [],
        aggressivness: 0.5
      });
    }
  
    ngOnInit() : void {}
  
    addUser() : void {
      const userToCreate: User = this.userForm.getRawValue() as User;
      this.userService.addUser(userToCreate);
      this.router.navigate(['/UserProfilePage/'],{state : {data : {userToCreate}}});
      
    }
}
