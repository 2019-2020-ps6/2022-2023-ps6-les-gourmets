import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/models/question.model';
import { Question } from 'src/models/question.model';

@Component({
    selector: 'app-GameAnswer',
    templateUrl: './GameAnswerComponent.component.html',
    styleUrls: ['./GameAnswerComponent.component.scss']
  })

  export class GameAnswerComponent implements OnInit {
    @Input() answer!: Answer;

    @Output()
    answerSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

    selected:boolean;

    constructor() {
      this.selected = false;
      }

    ngOnInit(): void {
      }

    selectAnswer(): void {
        this.selected = true;
        console.log(this.selected)
        this.answerSelected.emit(this.answer.isCorrect);
    }

  }
