
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

    constructor(public questionService: QuestionService, public quizService: QuizService,private jouerService: JouerService) {
      this.questionService.questions$.subscribe((questionList: Question[]) => {
        this.questionList = questionList;
      });
      this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
        this.quiz = quiz;
        this.updateQuestionSelectable();
      });
    }

    ngOnInit(): void {}

    addQuestionToQuiz(question: Question): void {
      
      this.quizService.selectQuiz(this.quiz);
      this.quizService.addQuestionForQuiz(question);
      
    }

    updateQuestionSelectable(): void {
      this.QuestionSelectable = this.questionList;
      //console.log(this.QuestionSelectable);
      this.quiz.questions.forEach(q=>{
        this.QuestionSelectable = this.QuestionSelectable.filter(
          question => q.id!=question.id
        );
        //console.log(this.QuestionSelectable);
        //console.log(this.quiz.questions);
        //console.log(this.questionList);
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
  }
