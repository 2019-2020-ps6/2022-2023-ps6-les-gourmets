import { Component, OnInit } from '@angular/core';
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
    public hidden : boolean = false

    constructor(private router: Router, public userService: UserService) {
      this.userService.UserSelected$.subscribe((UserSelected: User) => {
        this.User = UserSelected;
        this.UserModified = JSON.parse(JSON.stringify(this.User));
      });
    }
    ngOnInit(): void {}

    addQuizForProfile() : void {

    }
    deleteQuizForProfile(value : Quiz) : void {
        this.UserModified.quizzes = this.UserModified.quizzes.filter(quiz => value !== quiz)
    }

    applyChanges() : void {
        this.User = this.UserModified;
        this.userService.updateUser(this.UserModified)
    }
    cancelChanges() : void {
        this.UserModified = this.User;
    }
    switchPage() : void {
        console.log(this.UserModified)
        this.router.navigate(["/UserStatsPage/"],{state : { data : this.UserModified}})
    }
    return() : void {
        this.router.navigate(["/ListeUserPage/"])
    }


}
