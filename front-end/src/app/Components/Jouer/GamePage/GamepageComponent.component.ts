import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/models/question.model';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QUESTION_ACTOR } from 'src/mocks/QuizList.mocks';
import { QuizService } from 'src/service/quiz.service';
import { User } from 'src/models/User.model';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
import { JouerService } from 'src/service/jouer.service';



@Component({
    selector: 'app-GamePage',
    templateUrl: './GamePageComponent.component.html',
    styleUrls: ['./GamePageComponent.component.scss']
  })

  export class GamePageComponent implements OnInit {
    user!: User;
    quiz!: Quiz;
    currentQuestionIndex = 0;
    answers:boolean[]
    currentQuestion: Question;
    validate: boolean;
    end: boolean;
    nbAnswers: number;

    @HostListener("document:mousedown",['$event'])
    onClick(event: MouseEvent){this.jouerService.mouseClickInQuiz(event);}

    @Output()
   /* currentQuestion: EventEmitter<Question>=new EventEmitter<Question>();

    changeQuestion() : void{
        this.currentQuestion.emit(this.quiz.nextQuestion());
    }*/


    selectedAnswers = {};

    submit(): void {
      console.log(this.selectedAnswers);
    }

    constructor(private router: Router,public quizService:QuizService, public userService:UserService,public jouerService:JouerService) {
      //this.currentQuestion = this.quiz.questions[0];
      this.userService.UserSelected$.subscribe((user: User) => {
        this.user = user;
      });
      this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
        this.quiz = quiz;
      });
      // Randomise question order
      this.quiz.questions.sort(() => {
        return Math.random() - 0.5;
      });
      this.currentQuestion = this.quiz.questions[0];
      this.validate = false;
      this.answers = [];
      this.end = false;
      this.nbAnswers = this.quiz.questions.length;
    }

    ngOnInit(): void {
      //this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      this.currentQuestion = this.quiz.questions[0];
    }

    onNextQuestion(): void {
      console.log(this.answers);
      if (!this.validate || !this.answers[this.currentQuestionIndex]){
        this.quiz.questions.push(this.currentQuestion);
      }
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.quiz.questions.length) {
        this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
        this.validate = false;
      }
      else{ this.endQuiz()}
    }

    validateQuestion(answer:boolean): void {
      this.validate = true;
      this.answers[this.currentQuestionIndex] = answer;
      let i:number = 0;
      for(let a of this.answers){
        if(a){
          i++;
        }
      }
      if (i>=this.nbAnswers) {
        this.end = true;
        if(!this.user.answerDisplay){
          this.endQuiz();
        }
      }
      if(!this.user.answerDisplay){
        this.onNextQuestion();
      }
    }

    onPreviousQuestion(): void {
      this.currentQuestionIndex--;
      if (this.currentQuestionIndex >= 0) {
        this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      }
      else{ this.quitQuiz();}
    }

    endQuiz():void{
      this.router.navigate(['/EndPageComponent']);
    }

    quitQuiz():void{
      this.currentQuestionIndex++;
    }

    ChangeMusic(event : any){
      this.jouerService.fadeVolume(event.target.checked);
    }

  }


