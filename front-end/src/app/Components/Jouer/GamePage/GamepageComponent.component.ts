import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/models/question.model';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QUESTION_ACTOR } from 'src/mocks/QuizList.mocks';
import { QuizService } from 'src/service/quiz.service';



@Component({
    selector: 'app-GamePage',
    templateUrl: './GamePageComponent.component.html',
    styleUrls: ['./GamePageComponent.component.scss']
  })

  export class GamePageComponent implements OnInit {
    quiz!: Quiz;
    currentQuestionIndex = 0;
    currentQuestion: Question;


    @Output()
   /* currentQuestion: EventEmitter<Question>=new EventEmitter<Question>();

    changeQuestion() : void{
        this.currentQuestion.emit(this.quiz.nextQuestion());
    }*/


    selectedAnswers = {};

    submit(): void {
      console.log(this.selectedAnswers);
    }

    constructor(public quizService:QuizService) {
      //this.currentQuestion = this.quiz.questions[0];
      this.quiz=quizService.quizSelected$;
      this.currentQuestion = this.quiz.questions[0];
    }

    ngOnInit(): void {
      //this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      this.currentQuestion = this.quiz.questions[0];
    }

    onNextQuestion(): void {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.quiz.questions.length) {
        this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      }
    }

  }


