import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Question } from 'src/models/question.model';
import { UserService } from 'src/service/user.service';
//import { Quiz } from '../models/Quiz.model';



@Component({
    selector: 'app-GamePage',
    templateUrl: './GamePageComponent.component.html',
    styleUrls: ['./GamePageComponent.component.scss']
  })

  export class GamePageComponent implements OnInit {
    @Input() questions: Question[] = [];
    currentQuestionIndex = 0;
    currentQuestion: Question | undefined;


    @HostListener('document:mousedown', ['$event']) onClick(event : MouseEvent){
      this.userService.mouseClickInQuiz(event);
    }
   // @Output()
   /* currentQuestion: EventEmitter<Question>=new EventEmitter<Question>();

    changeQuestion() : void{
        this.currentQuestion.emit(this.quiz.nextQuestion());
    }*/


    selectedAnswers = {};

    submit(): void {
      console.log(this.selectedAnswers);
    }

    constructor(public userService : UserService) {
      this.currentQuestion = this.questions[0];
    }

    ngOnInit(): void {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }

    onNextQuestion(): void {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      }
    }

  }


