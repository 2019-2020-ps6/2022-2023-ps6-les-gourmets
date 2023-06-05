
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/service/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { JouerService } from 'src/service/jouer.service';
import { ButtonSound } from 'src/models/ButtonSound';

@Component({
    selector: 'app-ListeQuiz',
    templateUrl: './ListeQuiz.component.html',
    styleUrls: ['../../../../styles.scss','./ListeQuiz.component.scss']
})
export class ListeQuiz implements OnInit {
    public quizList: Quiz[] = [];

    constructor(public quizService: QuizService ,private jouerService : JouerService) {
      this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
        this.quizList = quizzes;
      });
    }

    ngOnInit(): void {}

    deleteQuiz(quiz: Quiz): void {
      this.jouerService.playButtonSimpleSound(ButtonSound.deleteSound)
      this.quizService.deleteQuiz(quiz);
    }
    /*selectQuiz(){
      this.quizService.selectQuiz()
    }*/
  }
