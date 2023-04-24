
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/service/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuestionService } from 'src/service/question.service';
import { Question } from 'src/models/question.model';

@Component({
    selector: 'app-ListeQuizAdable',
    templateUrl: './ListeQuizAdable.component.html',
    styleUrls: ['./ListeQuizAdable.component.scss']
})
export class ListeQuizAdable implements OnInit {
    public quiz!: Quiz;
    public questionList: Question[] = [];
    public quizTemp!: Quiz;
    public QuestionSelectable: Question[] = [];

    constructor(public questionService: QuestionService, public quizService: QuizService) {
      this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
        this.quiz = quiz;
        this.updateQuizSelectable();
      });
      this.questionService.questions$.subscribe((questionList: Question[]) => {
        this.questionList = questionList;
      });
      this.QuestionSelectable = this.questionList.filter(
        (quiz) => !this.quiz.questions.includes(quiz)
      );
    }

    ngOnInit(): void {}

    addQuestionToQuiz(question: Question): void {
      this.quizTemp = this.quiz;
      this.quizTemp.questions.push(question);
      this.quizService.selectQuiz(this.quizTemp);
      //this.userService.updateUser(this.user, this.userTemp);
      //this.user = this.userTemp;
    }

    updateQuizSelectable(): void {
      this.QuestionSelectable = this.questionList.filter(
        (quiz) => !this.quiz.questions.includes(quiz)
      );
    }
  }
