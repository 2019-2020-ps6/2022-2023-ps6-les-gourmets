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

        this.User = userService.UserSelected$.getValue();
        this.userService.UserSelected$.subscribe((UserSelected: User) => {
            this.User = UserSelected;
        });
        this.UserModified = JSON.parse(JSON.stringify(this.User));

        this.modifs = this.formBuilder.group({
            id: [this.User.id],
            name: [this.User.name],
            surname: [this.User.surname],
            aggressivness: this.User.aggressivness
        });
        userService.selectUser(this.UserModified);

    }
    ngOnInit(): void {}

    addQuizForProfile() : void {

    }
    deleteQuizForProfile(value : Quiz) : void {
        this.userService.deleteQuizForProfile(value);
    }

    applyChanges() : void {
        this.UserModified = this.modifs.getRawValue() as User;
        this.userService.updateUser(this.User, this.UserModified);
        this.User = this.UserModified;
    }
    cancelChanges() : void {
        this.UserModified = this.User;
        this.modifs['controls']['name'].setValue(this.User.name);
        this.modifs['controls']['surname'].setValue(this.User.surname);
        this.modifs['controls']['aggressivness'].setValue(this.User.aggressivness);
    }


}
