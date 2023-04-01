import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User.model';
import { Quiz } from 'src/models/quiz.model';
import { JouerService } from 'src/service/jouer.service';
import { QuizService } from 'src/service/quiz.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-ChoixQuiz',
  templateUrl: './ChoixQuiz.component.html',
  styleUrls: ['./ChoixQuiz.component.scss']
})

export class ChoixQuiz implements OnInit {

  public quizs: Quiz[] = [];
  public user!: User;

    constructor(public userService: UserService) {
      this.userService.UserSelected$.subscribe((user: User) => {
        this.user = user;
      });

      this.quizs = this.user.quizzes;
    }

    ngOnInit(): void {}

}
