import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/models/question.model';
import { Question } from 'src/models/question.model';
import { JouerService } from 'src/service/jouer.service';

@Component({
    selector: 'app-GameAnswer',
    templateUrl: './GameAnswerComponent.component.html',
    styleUrls: ['./GameAnswerComponent.component.scss']
  })

  export class GameAnswerComponent implements OnInit {
    @Input() answer!: Answer;
    @Input() selected!: boolean;

    @Output()
    answerSelected: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(private jouerService : JouerService) {
      }

    ngOnInit(): void {
      }

    selectAnswer(): void {      
      this.jouerService.playButtonSimpleSound();
        this.answerSelected.emit(this.answer.isCorrect);
    }

  }
