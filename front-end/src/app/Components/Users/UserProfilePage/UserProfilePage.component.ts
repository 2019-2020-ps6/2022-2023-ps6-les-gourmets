import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { User } from 'src/models/User.model';
import { UserService } from 'src/service/user.service';
@Component({
    selector: 'app-UserProfilePage',
    templateUrl: './UserProfilePage.component.html',
    styleUrls: ['./UserProfilePage.component.scss']
})
export class UserProfilePage implements OnInit {
    
    public User : User;
    public UserModified : User;

    constructor(public userService: UserService) {
        
        this.User = history.state.data.User;
        this.UserModified = JSON.parse(JSON.stringify(this.User))
    }
    ngOnInit(): void {}

    deleteQuizForProfile(value : Quiz){
        this.UserModified.quizzes = this.UserModified.quizzes.filter(quiz => value !== quiz)
    }

    applyChanges(){
        this.User = this.UserModified;
        this.userService.updateUser(this.UserModified)
    }
    cancelChanges(){
        this.UserModified = this.User;
    }

    
}
