
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/service/service1.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';

@Component({
    selector: 'app-ListeQuiz',
    templateUrl: './ListeQuiz.component.html',
    styleUrls: ['./ListeQuiz.component.scss']
})
export class ListeQuiz implements OnInit {
    public quizList: Quiz[] = [];

    constructor(private router: Router, public quizService: QuizService) {
      this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
        this.quizList = quizzes;
      });
    }

    ngOnInit(): void {}

    quizSelected(selected: boolean): void {
      console.log('event received from child:', selected);
    }

    editQuiz(quiz: Quiz): void {
      this.router.navigate(['/edit-quiz/' + quiz.name]);
    }

    deleteQuizz(quiz: Quiz): void {
      this.quizService.deleteQuiz(quiz);
    }
  }
