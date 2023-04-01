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
    @Input() answer_selected!:boolean;

    @Output()
    nextQuestion: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
      //Randomise answers order
      console.log(this.question)
      this.question.answers.sort(() => {
        return Math.random() - 0.5;
      })
    }

    answerSelected(answer: boolean): void {
      if (answer==true){
        console.log(answer);
      }
      this.nextQuestion.emit(answer)

      
    }

  }