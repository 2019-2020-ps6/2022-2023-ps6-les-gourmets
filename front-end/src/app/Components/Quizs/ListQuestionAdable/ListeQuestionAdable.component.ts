
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/service/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuestionService } from 'src/service/question.service';
import { Question } from 'src/models/question.model';

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

    constructor(public questionService: QuestionService, public quizService: QuizService) {
      this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
        this.quiz = quiz;
        this.updateQuestionSelectable();
      });
      this.questionService.questions$.subscribe((questionList: Question[]) => {
        this.questionList = questionList;
      });
      console.log("questionList")
      console.log(this.questionList);
      this.QuestionSelectable = this.questionList.filter(
        (quiz) => !this.quiz.questions.includes(quiz)
      );
      console.log("questionSelect")
      console.log(this.QuestionSelectable);
    }

    ngOnInit(): void {}

    addQuestionToQuiz(question: Question): void {
      
      this.quizService.selectQuiz(this.quiz);
      this.quizService.addQuestionForQuiz(question);
      //this.userService.updateUser(this.user, this.userTemp);
      //this.user = this.userTemp;
      
    }

    updateQuestionSelectable(): void {
      this.QuestionSelectable = this.questionList.filter(
        (quiz) => !this.quiz.questions.includes(quiz)
      );
    }
  }
