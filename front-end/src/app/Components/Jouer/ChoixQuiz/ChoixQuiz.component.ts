import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { User } from 'src/models/User.model';
import { Quiz } from 'src/models/quiz.model';
import { JouerService } from 'src/service/jouer.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-ChoixQuiz',
  templateUrl: './ChoixQuiz.component.html',
  styleUrls: ['./ChoixQuiz.component.scss']
})

export class ChoixQuiz implements OnInit {

  public quizs: Quiz[] = [];
  public user!: User;
  public quizReady: boolean = false;

    constructor(public userService: UserService, private jouerService: JouerService) {
      this.userService.UserSelected$.subscribe((user: User) => {
        if(user){
          this.user = user;
          this.quizs = this.user.quizzes;
          this.quizReady = true;
        }
      });
    }

    ngOnInit(): void {}

    playBackSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.back)
    }
}
