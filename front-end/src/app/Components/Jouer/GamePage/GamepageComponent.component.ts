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
  answers: boolean[] = [];
  currentQuestion: Question;
  validate: boolean = false;
  end: boolean = false;
  nbAnswers: number;
  quitPopup !: boolean;
  PopupVisibility: string = "hidden";
  ezActivited: boolean = false;

  @HostListener("document:mousedown",['$event'])
  onClick(event: MouseEvent){this.jouerService.mouseClickInQuiz(event);}
  @HostListener("document:mousemove",['$event'])
  onMove(event: MouseEvent){this.jouerService.mouseMoveInQuiz(event);}

  @Output()
    selectedAnswers = {};
  /* currentQuestion: EventEmitter<Question>=new EventEmitter<Question>();

   changeQuestion() : void{
       this.currentQuestion.emit(this.quiz.nextQuestion());
   }*/

    submit(): void {
      console.log(this.selectedAnswers);
    }

    constructor(private router: Router,public quizService:QuizService, public userService:UserService,public jouerService:JouerService) {
      this.userService.UserSelected$.subscribe((user: User) => {
        this.user = JSON.parse(JSON.stringify(user));
      });
      this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
        this.quiz = JSON.parse(JSON.stringify(quiz));
      });
      this.jouerService.quitPopup$.subscribe((appearance: boolean) => {
        this.quitPopup = appearance;
      });
      // Randomise question order
      this.quiz.questions.sort(() => {
        return Math.random() - 0.5;
      });
      const timeout = this.userService.getCurrentUser().passivity * 20000;

      //console.log("timeout: " + timeout);
      this.jouerService.setTimeout(timeout);
      this.currentQuestion = this.quiz.questions[0];
      this.nbAnswers = this.quiz.questions.length;
      jouerService.quizLaunch();
    }

    ngOnInit(): void {

      this.currentQuestion = this.quiz.questions[0];

    }

    NextQuestion(): void {

      if (!this.answers[this.currentQuestionIndex]){
        this.quiz.questions.push(this.currentQuestion);
      }
      this.jouerService.removeLastClick();
      this.ChangeQuestion();
    }
    SkipQuestion(){
      this.quiz.questions.push(this.currentQuestion);
      this.ChangeQuestion();
    }
    ChangeQuestion(){
      console.log("cc");
      console.log(this.jouerService.getRage());
      if(this.jouerService.getRage() ){
        if(this.ezActivited==false){
          this.ezActivited=true;
          console.log("insertez");
          this.InsertEasyQuestion2();
        }

      }
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.quiz.questions.length) {
        this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
        this.validate = false;
      }
      else{ this.endQuiz()}

    }

    InsertEasyQuestion(){
      this.jouerService.untriggerRage();
      var eznumber = this.quiz.easyQuestions.length;
      var number =this.quiz.questions.length;
      console.log("oui");
      for(var i = 0; i < eznumber; i++){
        this.quiz.questions.push(this.quiz.easyQuestions[i]);

        console.log(this.quiz.questions[number+i])
        console.log(this.quiz.questions[this.currentQuestionIndex+i])
        this.InvertQuestion(this.quiz.questions[number+i],this.quiz.questions[this.currentQuestionIndex+i]);
        console.log(this.quiz.questions[number+i])
        console.log(this.quiz.questions[this.currentQuestionIndex+i])
        this.nbAnswers++;
      }

    }

    InsertEasyQuestion2(){
      this.jouerService.untriggerRage();
      const eznumber = this.quiz.easyQuestions.length;
      const currentIndex = this.currentQuestionIndex;

      console.log("oui");
      for (let i = 0; i < eznumber; i++) {
        // Insérer la question facile après la question courante
        this.quiz.questions.splice(currentIndex + 1 + i, 0, this.quiz.easyQuestions[i]);
        this.nbAnswers++;
      }
    }

    InvertQuestion(q1:Question,q2:Question): void {
      let temp: Question = q1;
      q1 = q2;
      q2 = temp;
    }

    validateQuestion(answer:boolean): void {
      this.validate = true;
      this.answers[this.currentQuestionIndex] = answer;
      if(answer) this.jouerService.removeLastClick();
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
        this.NextQuestion();
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
      this.jouerService.updateResults(this.quiz.questions,this.answers);
      this.userService.updateUserStats(this.quizService.quizSelected$.getValue(),this.quiz.questions,this.answers);
      this.userService.updateUserTimer(this.quizService.quizSelected$.getValue(),this.jouerService.getTimer());
      this.router.navigate(['/EndPageComponent']);
    }

    quitQuiz():void{
      this.currentQuestionIndex++;
    }

    ChangeMusic(event : any){
      this.jouerService.setMusicActivated(event.target.checked);
    }
    getMusicActivated() : boolean {
      return this.jouerService.musicActivated;
    }

    hidepopup(){
      this.jouerService.quitPopupVisibility(false);
    }

    showpopup(){
      this.jouerService.quitPopupVisibility(true);
    }

    ngOnDestroy() {
      this.jouerService.playBackgroundMusic();
      this.jouerService.reset();
    }





}


