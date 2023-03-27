import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { User } from 'src/models/User.model';
import { UserService } from 'src/service/user.service';
@Component({
    selector: 'app-UserProfilePage',
    templateUrl: './UserProfilePage.component.html',
    styleUrls: ['./UserProfilePage.component.scss']
})
export class UserProfilePage implements OnInit {
    
    
    public User!: User;
    public UserModified!: User;
    public modifs : FormGroup;

    constructor(private router : Router, public formBuilder : FormBuilder, public userService : UserService) {
        this.User = userService.UserSelected$.getValue();
        this.userService.UserSelected$.subscribe((UserSelected: User) => {
            this.User = UserSelected;
            this.UserModified = JSON.parse(JSON.stringify(this.User));
        });
        if(this.User==undefined) router.navigate(['UserListePage']);
      
        this.modifs = this.formBuilder.group({
            id: [this.User.id],
            name: [this.User.name],
            surname: [this.User.surname],
            aggressivness: this.User.aggressivness
        });
    }
    ngOnInit(): void {}

    addQuizForProfile() : void {

    }
    deleteQuizForProfile(value : Quiz) : void {
        this.UserModified.quizzes = this.UserModified.quizzes.filter(quiz => value !== quiz)
    }

    applyChanges() : void {
        console.log(this.modifs.getRawValue() as User)
        this.UserModified = this.modifs.getRawValue() as User;
        this.User = this.UserModified;
        this.userService.updateUser(this.UserModified)
    }
    cancelChanges() : void {
        console.log("cancel");
        console.log(this.User);
        console.log(this.UserModified);
        this.UserModified = JSON.parse(JSON.stringify(this.User));
        console.log(this.UserModified);
        
    }


}
