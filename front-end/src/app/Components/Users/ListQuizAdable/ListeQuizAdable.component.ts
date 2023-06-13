
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
    public QuizSelectable: Quiz[] = [];
    public DeleteorAdd: String = "Add";
    public userReady: boolean = false;
    public quizReady: boolean = false;


    constructor(public userService: UserService, public quizService: QuizService, private jouerService : JouerService) {
      this.userService.UserSelected$.subscribe((user: User) => {
        if(user) {
        this.user = user;
        this.userReady = true;
        this.updateQuizSelectable();
        }
      });
      this.quizService.quizzes$.subscribe((quizList: Quiz[]) => {
        if(quizList && this.user){
        this.quizList = quizList;
        this.quizReady = true;
        this.updateQuizSelectable();
        }
      });
    }

    ngOnInit(): void {}

    addQuizToUser(quiz: Quiz): void {
      this.userService.addQuizForUser(quiz);
    }

    updateQuizSelectable(): void {
      this.QuizSelectable = this.quizList;
      this.user.quizzes.forEach(q=>{
      this.QuizSelectable = this.QuizSelectable.filter(
        quiz => q.id!==quiz.id
      );
      })

    }


    playBackSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.back);
    }
  }
