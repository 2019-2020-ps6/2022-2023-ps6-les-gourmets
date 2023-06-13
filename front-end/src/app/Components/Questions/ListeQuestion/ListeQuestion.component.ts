
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { QuestionService } from 'src/service/question.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';


@Component({
    selector: 'app-ListeQuestion',
    templateUrl: './ListeQuestion.component.html',
    styleUrls: ['./ListeQuestion.component.scss']
})
export class ListeQuestion implements OnInit {

    @Input() theme!: string;
    public quizQuestion: Question[] = [];

    constructor(private router: Router, public questionService: QuestionService) {
      this.questionService.questions$.subscribe((questions: Question[]) => {
        this.quizQuestion =  questions;
      });
    }

    ngOnInit(): void {}

    questionSelected(selected: boolean): void {
    }

   /* editQuestion(question: Question): void {
      this.router.navigate(['/edit-quiz/' + question.label]);
    }*/

    deleteQuestion(question: Question): void {
      this.questionService.deleteQuestion(question);
    }

    themeSelected(question: Question): boolean {
      if(this.theme==""){
        return true;
      }
      return question.themes.includes(this.theme);
    }
  }
