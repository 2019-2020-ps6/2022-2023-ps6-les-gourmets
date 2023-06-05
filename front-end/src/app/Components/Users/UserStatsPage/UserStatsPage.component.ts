import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { User } from 'src/models/User.model';
import { JouerService } from 'src/service/jouer.service';
import { UserService } from 'src/service/user.service';
@Component({
    selector: 'app-UserStatsPage',
    templateUrl: './UserStatsPage.component.html',
    styleUrls: ['../../../../styles.scss','./UserStatsPage.component.scss']
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
