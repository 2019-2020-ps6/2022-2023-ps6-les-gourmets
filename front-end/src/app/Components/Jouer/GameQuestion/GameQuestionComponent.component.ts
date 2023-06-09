import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/models/question.model';
import { JouerService } from 'src/service/jouer.service';


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

    constructor(private jouerService : JouerService) {
    }

    ngOnInit(): void {
      this.question.answers.sort(() => {
        return Math.random() - 0.5;
      })
    }

    answerSelected(answer: boolean): void {
      this.jouerService.playButtonSimpleSound();
      this.nextQuestion.emit(answer);

      
    }

  }