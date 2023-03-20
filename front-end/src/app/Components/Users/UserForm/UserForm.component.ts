import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/service/user.service';
@Component({
    selector: 'app-UserForm',
    templateUrl: './UserForm.component.html',
    styleUrls: ['./UserForm.component.scss']
})
export class UserForm implements OnInit {
    public userForm: FormGroup;
  
    constructor(public formBuilder: FormBuilder, private userService: UserService) {
      this.userForm = this.formBuilder.group({
        name: [''],
        surname: [''],
        quizs: [],
        aggressivness: 0.2
      });
    }
  
    ngOnInit(): void {}
  
    addUser(): void {
      const quizToCreate: User = this.userForm.getRawValue() as User;
      this.userService.addUser(quizToCreate);
    }
}
