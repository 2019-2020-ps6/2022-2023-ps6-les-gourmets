import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/models/question.model';
import { Question } from 'src/models/question.model';

@Component({
    selector: 'app-GameQuestion',
    templateUrl: './GameQuestionComponent.component.html',
    styleUrls: ['./GameQuestionComponent.component.scss']
  })

  export class GameQuestionComponent implements OnInit {
    @Input() question!: Question;

    @Output()
    nextQuestion: EventEmitter<Question> = new EventEmitter<Question>();

    constructor() {
      }

    ngOnInit(): void {
      }

    answerSelected(answer: boolean): void {
      if (answer==true){
        console.log(answer);
      }
      
    }

  }