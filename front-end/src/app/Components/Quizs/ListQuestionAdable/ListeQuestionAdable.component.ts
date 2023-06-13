
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/service/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuestionService } from 'src/service/question.service';
import { Question } from 'src/models/question.model';
import { ButtonSound } from 'src/models/ButtonSound';
import { JouerService } from 'src/service/jouer.service';

@Component({
    selector: 'app-ListeQuestionAdable',
    templateUrl: './ListeQuestionAdable.component.html',
    styleUrls: ['./ListeQuestionAdable.component.scss']
})
export class ListeQuestionAdable implements OnInit {
    public quiz!: Quiz;
    public questionList: Question[] = [];
    public quizTemp!: Quiz;
    public QuestionSelectable: Question[] = [];
    theme:string;
    afficheTheme:boolean;
    quizReady: boolean = false;
    questionReady: boolean = false;

    constructor(public questionService: QuestionService, public quizService: QuizService,private jouerService: JouerService) {
      this.theme = "";
      this.afficheTheme=false;
      this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
        if (quiz) {
          this.quiz = quiz;
          this.quizReady = true;
          this.updateQuestionSelectable();
        }
      });
      this.questionService.questions$.subscribe((questionList: Question[]) => {
        if(questionList && this.quiz){
          this.questionList = questionList;
          this.questionReady = true;
          this.updateQuestionSelectable();
        }
      });
    }

    ngOnInit(): void {}

    addQuestionToQuiz(question: Question): void {
      
      this.quizService.selectQuiz(this.quiz);
      this.quizService.addQuestionForQuiz(question);
      
    }

    updateQuestionSelectable(): void {
      this.QuestionSelectable = this.questionList;
      this.quiz.questions.forEach(q=>{
        this.QuestionSelectable = this.QuestionSelectable.filter(
          question => q.id!=question.id
        );
      })
      this.quiz.easyQuestions.forEach(q=>{
        this.QuestionSelectable = this.QuestionSelectable.filter(
          question => q.id!=question.id
        );
      })
    }
    playBackSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.back)
    }

    annulerTheme(): void{
      this.theme="";
    }

    chooseTheme(theme:string): void{
      this.theme=theme;
      this.afficheTheme=false;
    }

    changeAffichage(): void{
      this.afficheTheme=!this.afficheTheme;
    }

    themeSelected(question: Question): boolean {
      if(this.theme==""){
        return true;
      }
      return question.themes.includes(this.theme);
    }
  }
