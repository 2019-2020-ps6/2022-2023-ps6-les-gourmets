
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Question } from 'src/models/question.model';
import { GamePageComponent } from '../../Quizs/GamePage/GamePageComponent.component';

@Component({
    selector: 'app-Question',
    templateUrl: './Question.component.html',
    styleUrls: ['./Question.component.scss']
})

export class QuestionComponent implements OnInit {

  @Input()
  question!: Question;

  @Output()
  questionSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectQuestion(): void {
    this.questionSelected.emit(true);
  }

  edit(): void {
    this.editQuestion.emit(this.question);
  }

  delete(): void {
    this.deleteQuestion.emit(this.question);
  }
}
