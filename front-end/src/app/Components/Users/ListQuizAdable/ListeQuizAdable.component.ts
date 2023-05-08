
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/service/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { UserService } from 'src/service/user.service';
import { User } from 'src/models/User.model';
import { JouerService } from 'src/service/jouer.service';
import { ButtonSound } from 'src/models/ButtonSound';

@Component({
    selector: 'app-ListeQuizAdable',
    templateUrl: './ListeQuizAdable.component.html',
    styleUrls: ['./ListeQuizAdable.component.scss']
})
export class ListeQuizAdable implements OnInit {
    public quizList: Quiz[] = [];
    public user!: User;
    public userTemp!: User;
    public QuizSelectable: Quiz[] = [];
    public DeleteorAdd: String = "Add";


    constructor(public userService: UserService, public quizService: QuizService, private jouerService : JouerService) {
      this.userService.UserSelected$.subscribe((user: User) => {
        this.user = user;
        this.updateQuizSelectable();
      });
      this.quizService.quizzes$.subscribe((quizList: Quiz[]) => {
        this.quizList = quizList;
      });
      this.QuizSelectable = this.quizList.filter(
        (quiz) => !this.user.quizzes.includes(quiz)
      );
    }

    ngOnInit(): void {}

    addQuizToUser(quiz: Quiz): void {
      this.userTemp = this.user;
      this.userTemp.quizzes.push(quiz);
      this.userService.selectUser(this.userTemp);
      //this.userService.updateUser(this.user, this.userTemp);
      //this.user = this.userTemp;
    }

    updateQuizSelectable(): void {
      this.QuizSelectable = this.quizList.filter(
        (quiz) => !this.user.quizzes.includes(quiz)
      );
    }
    playBackSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.back);
    }
  }
