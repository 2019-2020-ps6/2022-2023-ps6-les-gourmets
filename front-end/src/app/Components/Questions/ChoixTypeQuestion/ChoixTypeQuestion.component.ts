// QuestionForm.ts

import { Component, OnInit, Output } from '@angular/core';
import { Question } from 'src/models/question.model';
import { QuestionService } from 'src/service/question.service';

@Component({
    selector: 'app-ChoixTypeQuestion',
    templateUrl: './ChoixTypeQuestion.component.html',
    styleUrls: ['./ChoixTypeQuestion.component.scss']
})
export class ChoixTypeQuestion implements OnInit {

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {}

  selectType(type:string): void {
    const nouvelleQuestion: Question = {
        id:  12,
        label: '',
        themes:[],
        type:type,
        answers: [
            {
                type: type,
                value: '',
                isCorrect: false,
            },
            {
                type: type,
                value: '',
                isCorrect: false,
            },
            {
                type: type,
                value: '',
                isCorrect: false,
            },
            {
                type: type,
                value: '',  
                isCorrect: false,
          }
      ],
      estFacile:false
    };
    this.questionService.selectQuestion(nouvelleQuestion);
    this.questionService.canEdit(false);
  }
}
