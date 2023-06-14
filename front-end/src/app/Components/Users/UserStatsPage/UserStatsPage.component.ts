import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { User } from 'src/models/User.model';
import { Stat } from 'src/models/stat.model';
import { Quiz } from 'src/models/quiz.model';
import { JouerService } from 'src/service/jouer.service';
import { UserService } from 'src/service/user.service';
@Component({
    selector: 'app-UserStatsPage',
    templateUrl: './UserStatsPage.component.html',
    styleUrls: ['./UserStatsPage.component.scss']
})
export class UserStatsPage implements OnInit {

    public User!: User;
    public Stats!: Stat[];

    constructor(public userService: UserService, private jouerService: JouerService) {
        userService.UserSelected$.subscribe(user => {
          this.User = user;
        });
        userService.UserStats$.subscribe(stats => {
            this.Stats = stats;
        });
        userService.retrieveUserStats();
    }
    ngOnInit() : void {}

    playBackSound(){
        this.jouerService.playButtonSimpleSound(ButtonSound.back)

    }
    switchPage(){
        this.jouerService.playButtonSimpleSound(ButtonSound.NextQuestion)
    }

}
