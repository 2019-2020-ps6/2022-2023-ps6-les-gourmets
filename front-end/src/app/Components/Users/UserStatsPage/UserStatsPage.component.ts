import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { User } from 'src/models/User.model';
import { UserService } from 'src/service/user.service';
@Component({
    selector: 'app-UserStatsPage',
    templateUrl: './UserStatsPage.component.html',
    styleUrls: ['./UserStatsPage.component.scss']
})
export class UserStatsPage implements OnInit {

    public User!: User;

    constructor(public userService: UserService) {
        userService.UserSelected$.subscribe(user => {
          this.User = JSON.parse(JSON.stringify(user));
        });
    }
    ngOnInit() : void {}


}
