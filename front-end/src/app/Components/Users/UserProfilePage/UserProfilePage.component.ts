import { Component, OnInit } from '@angular/core';
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

    constructor(public formBuilder : FormBuilder, public userService : UserService) {

        this.userService.UserSelected$.subscribe((UserSelected: User) => {
            this.UserModified = UserSelected;
        });

        this.User = JSON.parse(JSON.stringify(this.UserModified));

        this.modifs = this.formBuilder.group({
            id: [this.UserModified.id],
            name: [this.UserModified.name],
            surname: [this.UserModified.surname],
            aggressivness: this.UserModified.aggressivness,
            passivity: this.UserModified.passivity,
            answerDisplay: this.UserModified.answerDisplay
        });
        // userService.selectUser(this.UserModified);
    }
    ngOnInit(): void {}

    addQuizForProfile() : void {

    }
    deleteQuizForProfile(value : Quiz) : void {
        this.userService.deleteQuizForProfile(value);
    }

    applyChanges() : void {
      let Quizzs: Quiz[] = [];
      Quizzs = JSON.parse(JSON.stringify(this.UserModified.quizzes));
      this.UserModified = this.modifs.getRawValue() as User;
      this.UserModified.quizzes = JSON.parse(JSON.stringify(Quizzs));

      this.userService.updateUser(this.User, this.UserModified);
      this.User = JSON.parse(JSON.stringify(this.UserModified));
      this.userService.selectUser(this.UserModified);
    }
    cancelChanges() : void {
        this.UserModified = JSON.parse(JSON.stringify(this.User));;
        this.userService.updateUser(this.UserModified, this.User);
        this.userService.selectUser(this.UserModified);
        this.modifs['controls']['name'].setValue(this.User.name);
        this.modifs['controls']['surname'].setValue(this.User.surname);
        this.modifs['controls']['aggressivness'].setValue(this.User.aggressivness);
        this.modifs['controls']['passivity'].setValue(this.User.passivity);
        this.modifs['controls']['answerDisplay'].setValue(this.User.answerDisplay);
    }


}
