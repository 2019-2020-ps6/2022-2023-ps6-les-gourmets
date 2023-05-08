import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSound } from 'src/models/ButtonSound';
import { Quiz } from 'src/models/quiz.model';
import { User } from 'src/models/User.model';
import { JouerService } from 'src/service/jouer.service';
import { UserService } from 'src/service/user.service';
@Component({
    selector: 'app-UserStatsPage',
    templateUrl: './UserStatsPage.component.html',
    styleUrls: ['./UserStatsPage.component.scss']
})
export class UserStatsPage implements OnInit {

    public User!: User;

    constructor(public userService: UserService, private jouerService: JouerService) {
        userService.UserSelected$.subscribe(user => {
          this.User = JSON.parse(JSON.stringify(user));
        });
    }
    ngOnInit() : void {}

    playBackSound(){
        this.jouerService.playButtonSimpleSound(ButtonSound.back)

    }
    switchPage(){
        this.jouerService.playButtonSimpleSound(ButtonSound.NextQuestion)
    }

}
